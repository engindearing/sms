import { Context } from "./src/utils/createContext";

declare namespace Express {
  export interface Request {
    user?: object;
  }
}

interface ResolverParams {
  ctx: Context;
  payload: any;
}
