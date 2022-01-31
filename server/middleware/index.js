import { helmet_ } from "./helmet.js";
import { cors_ } from "./cors.js";
import { parseURI, parseJSON } from "./body-parser.js";
import { session_ } from "./express-session.js";
import { _serveStatic } from "./serve-static.js";
import logger from "./morgan.js";
// import { serveSwagger, setupSwagger } from "./swagger.js";
export default [
  // helmet_,
  cors_,
  parseURI,
  parseJSON,
  session_,
  _serveStatic,
  logger,
];
