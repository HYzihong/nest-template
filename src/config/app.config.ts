import { getYamlConfig } from "./env.config";

/**
 * app config
 */
const config = () => ({
  host: "127.0.0.1",
  port: 3100,
  config: getYamlConfig(),
});
export default config;
