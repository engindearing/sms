import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";
import log from "./logger";
import {
  addMemberInput,
  householdSchema,
  updateHouseholdInput,
} from "../schema/household.schema";
import { userSchema } from "../schema/user.schema";
import { generateSchema } from "@anatine/zod-openapi";
import { memberSchema } from "../schema/member.schema";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RPC API Docs",
      version,
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: {
        Household: generateSchema(householdSchema),
        UpdateHouseholdInput: generateSchema(updateHouseholdInput),
        User: generateSchema(userSchema),
        Member: generateSchema(memberSchema),
        AddMemberInput: generateSchema(addMemberInput),
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routers/*.ts", "./src/schema/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  log.info(`📖 Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
