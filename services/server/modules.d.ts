import { z } from "zod";

import { userSchema } from "./src/schemas/user.schema";

declare module "express-serve-static-core" {
  interface Request {
    user: z.infer<typeof userSchema>;
  }
}

declare module "seeds/seeds"