import {
  ArticleRepositorySqlite,
  type IArticleRepository,
} from "../repositories/article.ts";

export class Articles {
  #repository: IArticleRepository;
  constructor(repository: IArticleRepository = new ArticleRepositorySqlite()) {
    this.#repository = repository;
  }

  async fetchAll(): Promise<any[]> {
    return await this.#repository.fetchAll();
  }
}
