import { sqliteDb } from "../db.ts";
import type { Database } from "bun:sqlite";

export interface IArticleRepository {
  fetch: (id: string) => Promise<unknown>;
  fetchAll: () => Promise<unknown>;
}
export class ArticleRepositorySqlite implements IArticleRepository {
  #db: Database = sqliteDb;

  // constructor() {}

  async fetch(id: string) {
    return this.#db.query("SELECT * FROM article WHERE id = $id").get({
      id,
    });
  }

  async fetchAll() {
    return this.#db.query("SELECT * FROM article").all();
  }

  async create() {
    return "created";
  }
}
