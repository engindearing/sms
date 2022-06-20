import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { User } from "../../models/User";
import { verifyIdToken } from "../../utils/firebase";

// The app's context - is generated for each incoming request
export async function createContext(
  opts?: trpcExpress.CreateExpressContextOptions
) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers

  async function getUserFromHeader() {
    if (
      opts?.req.headers.authorization &&
      opts.req.headers.authorization.startsWith("Bearer")
    ) {
      let result: any = await verifyIdToken(
        opts.req.headers.authorization.split(" ")[1]
      );

      if (result) {
        let user = await User.findUserByEmailOrCreate(result.email);

        return user;
      }
    }

    return null;
  }
  const user = await getUserFromHeader();

  return {
    user,
  };
}
export type Context = trpc.inferAsyncReturnType<typeof createContext>;

// Helper function to create a router with your app's context
export function createRouter() {
  return trpc.router<Context>();
}
