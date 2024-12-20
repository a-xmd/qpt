import {
  ArticleRepositorySqlite,
  type IArticleRepository,
} from "../repositories/article.ts";

export class Article {
  id: string;
  #repository: IArticleRepository;

  constructor(
    id: string,
    repository: IArticleRepository = new ArticleRepositorySqlite(),
  ) {
    this.#repository = repository;
    this.id = id;
  }

  static create(): string {
    return "created";
  }

  async update() {}

  async fetch(): Promise<{ uuid: string }> {
    return await this.#repository.fetch(this.id);
  }
}
