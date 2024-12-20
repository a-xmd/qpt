import { Database } from "bun:sqlite";

export const sqliteDb = new Database("mydb.sqlite", { strict: true });
