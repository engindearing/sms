import { TRPCError } from "@trpc/server";

import { createRouter } from "../utils/createRouter";

import users from "./user";

import households from "./household";

import shelters from "./shelters";

import { z } from "zod";

const appRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (!ctx.user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Please login to access this resource",
      });
    }

    return next();
  })

  .mutation("update", {
    // validate input with Zod
    input: z.object({ name: z.string() }),
    async resolve({ input }) {
      return "";
    },
  })

  .merge("users.", users)
  .merge("households.", households)
  .merge("shelters.", shelters);

export default appRouter;
