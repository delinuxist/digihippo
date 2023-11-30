import { createTRPCReact } from "@trpc/react-query";
import { AppRouterModel } from ".";
export const trpc = createTRPCReact<AppRouterModel>({});
