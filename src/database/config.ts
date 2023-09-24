import dotenv from 'dotenv';

dotenv.config();

const PG_HOST = process.env.PG_HOST;
const PG_USER = process.env.PG_USER;
const PG_PASSWORD = process.env.PG_PASSWORD;
const PG_DATABASE = process.env.PG_DATABASE;

export { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_USER };