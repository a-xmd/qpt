import { type Request, type Response } from "express";
import { Article } from "../models/article.ts";
import { Articles } from "../collections/articles.ts";
import { Get } from "./decorators/request-methods.ts";

export class ArticleController {
  @Get<ArticleController>("/")
  async getAll(_req: Request, res: Response) {
    console.log("☀️");
    res.json({ data: await new Articles().fetchAll() });
  }

  @Get<ArticleController>("/:id")
  async get(req: Request, res: Response) {
    console.log("👋");
    const { id } = req.params;
    res.json({ data: await new Article(id).fetch() });
  }
}
