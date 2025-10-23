import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  CLERK_WEBHOOK_SECRET: z.string().min(1),
});

let cachedEnv: z.infer<typeof envSchema> | null = null;

export function getEnv() {
  if (cachedEnv) return cachedEnv;
  const parsed = envSchema.safeParse({
    DATABASE_URL: process.env.DATABASE_URL,
    CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
  });
  if (!parsed.success) {
    throw new Error(parsed.error.message);
  }
  cachedEnv = parsed.data;
  return cachedEnv;
}
