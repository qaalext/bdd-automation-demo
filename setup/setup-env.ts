import * as dotenv from "dotenv";
import path from "path";

const env = process.env.ENV || "dev"; // Default to 'dev'
dotenv.config({ path: path.resolve(__dirname, `../.env.${env}`) });
console.log(`Environment loaded: ${env}`);
