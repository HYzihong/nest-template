import * as fs from "fs";
import * as path from "path";
import { parse } from "yaml";

/**
 * get config by yaml file
 */
export const getYamlConfig = () => {
  const environment = getEnv();
  const fileBuffer = fs.readFileSync(
    path.join(process.cwd(), `./config/${environment}.yml`),
    "utf8"
  );
  const config = parse(fileBuffer);
  return config;
};

/**
 * get node env
 */
export const getEnv = (): Environment => {
  return process.env.NODE_ENV as Environment;
};

export enum Environment {
  Development = "development",
  Production = "production",
  Test = "test",
  Provision = "provision",
}
