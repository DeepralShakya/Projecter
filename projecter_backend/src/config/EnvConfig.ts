import dotenv, { DotenvConfigOutput } from "dotenv";

import { appStrings } from "@/constants";

const env: DotenvConfigOutput = dotenv.config();

interface EnvConfig {
  port: number;
  appEnvironment: string;
  jwtKey: string | undefined;
  databaseUrl: string | undefined;
  jwtExpiryDuration: string | undefined;
}

if (process.env.ENV === "local") {
  if (env.error) {
    throw new Error(`⚠️ ${appStrings.cannot_find_env}`);
  }
}

export const envConfig: EnvConfig = {
  databaseUrl: process.env.DB,
  jwtKey: process.env.JWT_KEY,
  jwtExpiryDuration: process.env.JWT_EXPIRE,
  appEnvironment: process.env.ENV || appStrings.devEnv,
  port: parseInt(process.env.PORT || appStrings.fallback_port, 10),
};
