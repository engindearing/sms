import { createReactQueryHooks } from "@trpc/react";

import { AppRouter } from "api-server/src/api/app";

export const trpc = createReactQueryHooks<AppRouter>();
