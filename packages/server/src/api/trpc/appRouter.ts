import * as trpc from "@trpc/server";
import { TRPCError } from "@trpc/server";

import { z } from "zod";

import { Context } from "./context";

const appRouter = trpc
  .router<Context>()
  .middleware(async ({ ctx, next }) => {
    console.log(ctx);
    if (!ctx.user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Please login to access this resource",
      });
    }

    return next();
  })

  .query("hello", {
    resolve() {
      return "Hello world II";
    },
  })
  .query("user.getCurrentUser", {
    resolve(e) {
      console.log(e.ctx);
      return "hello";
    },
  });

export default appRouter;
