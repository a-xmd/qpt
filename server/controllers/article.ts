import { Article } from "../models/article.ts";
import { Articles } from "../collections/articles.ts";

import express, { type Request, type Response } from "express";

export const articleRouter = express.Router();

function Get(path: string) {
  return function RegisterRoute(
    target: ArticleController,
    key: keyof ArticleController,
  ): void {
    articleRouter.get(path, (req: Request, res: Response) => {
      target[key](req, res);
    });
  };
}

export class ArticleController {
  @Get("/")
  async getArticles(_req: Request, res: Response) {
    console.log("☀️");
    res.json({ data: await new Articles().fetchAll() });
  }

  @Get("/:id")
  async getArticle(req: Request, res: Response) {
    console.log("👋");
    const { id } = req.params;
    res.json({ data: await new Article(id).fetch() });
  }
}
