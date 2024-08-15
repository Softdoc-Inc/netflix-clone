import dotenv from "dotenv";

/**
 * This function loads environment variables from a .env file located at the specified path.
 * It uses the dotenv package to achieve this.
 *
 * @param {string} options.path - The path to the .env file.
 */
dotenv.config({ path: "../.env" });

/**
 * This object contains environment variables used throughout the application.
 * The values are loaded from a .env file located at the specified path using the dotenv package.
 *
 * @typedef {Object} EnvironmentVariables
 * @property {string} MONGO_URI - The MongoDB connection URI.
 * @property {number} PORT - The server port number. Default is 8000 if not specified.
 * @property {string} NODE_ENV - The environment mode. Default is 'development' if not specified.
 * @property {string} JWT_SECRET - The secret key for JSON Web Tokens.
 * @property {string} TMDB_API_KEY - The API key for The Movie Database (TMDB).
 * @property {string} MAILTRAP_TOKEN - The token for Mailtrap SMTP service.
 * @property {string} MAILTRAP_ENDPOINT - The endpoint for Mailtrap SMTP service.
 */

export const ENV_VARS = {
  // APP configuration
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.SERVER_PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",

  // JWT configuration
  JWT_SECRET: process.env.JWT_SECRET,

  // TMDB API configuration
  TMDB_API_KEY: process.env.TMDB_API_KEY,

  // Mailtrap SMTP configuration
  MAILTRAP_TOKEN: process.env.MAILTRAP_TOKEN,
  MAILTRAP_ENDPOINT: process.env.MAILTRAP_ENDPOINT,
};
