import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv ({
  server: {
    AUTH_URL: z.url(),
  },

  //   Client Example
  client: {
    NEXT_PUBLIC_TEST: z.string(),
  },

  runtimeEnv: {
    AUTH_URL: process.env.AUTH_URL,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
});
