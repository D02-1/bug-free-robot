import { cors_ } from "./cors.js";
import { parseURI, parseJSON } from "./body-parser.js";
import { session_ } from "./express-session.js";
import logger from "./morgan.js";
export default [cors_, parseURI, parseJSON, session_, logger];