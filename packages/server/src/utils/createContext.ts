import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { User } from "../models/user.model";
import { verifyIdToken } from "./firebase";

import { IUser, IUserDocument } from "../models/user.model";

// The app's context - is generated for each incoming request
// Will be available as `ctx` in all your resolvers
export async function createContext(
  opts?: trpcExpress.CreateExpressContextOptions
) {
  async function getUserFromHeader() {
    if (
      opts?.req.headers.authorization &&
      opts?.req.headers.authorization.startsWith("Bearer")
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

  // #TODO: Refactor
  const user: IUserDocument | null =
    (await getUserFromHeader()) as IUserDocument | null;

  return {
    user,
  };
}

export default createContext;

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
