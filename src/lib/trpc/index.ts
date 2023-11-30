import { router } from "./trpc";

export const appRouter = router({});

export type AppRouterModel = typeof appRouter;
