import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";

import log from "./logger";

import { generateSchema } from "@anatine/zod-openapi";

import { userSchema } from "../schemas/user.schema";

import {
  householdSchema,
  updateHouseholdInput,
} from "../schemas/household.schema";
import { reservationSchema } from "../schemas/reservation.schema";

import {
  bulkUpdateMembersInput,
  createMemberInput,
  memberSchema,
} from "../schemas/member.schema";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
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
        User: generateSchema(userSchema),
        Household: generateSchema(householdSchema),
        UpdateHouseholdInput: generateSchema(updateHouseholdInput),
        Reservation: generateSchema(reservationSchema),
        Member: generateSchema(memberSchema),
        CreateMemberInput: generateSchema(createMemberInput),
        BulkUpdateMembersInput: generateSchema(bulkUpdateMembersInput),
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/schemas/*.ts"],
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
