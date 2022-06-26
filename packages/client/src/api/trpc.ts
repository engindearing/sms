import { createReactQueryHooks } from "@trpc/react";

import type { AppRouter } from "api-server/src/app";

export const trpc = createReactQueryHooks<AppRouter>();
