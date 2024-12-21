import express, { type Request, type Response, type Router } from "express";

// @todo: move to own file?
export const articleRouter = express.Router();
export const commentRouter = express.Router();

export function Get<
  ControllerType extends Record<
    keyof ControllerType,
    (req: Request, res: Response) => void
  >,
>(path: string) {
  return function RegisterRoute(
    target: ControllerType,
    key: keyof ControllerType,
  ): void {
    let router: Router | null = null;

    switch (target.constructor.name) {
      case "ArticleController":
        router = articleRouter;
        break;
      case "CommentController":
        router = commentRouter;
        break;
    }

    if (router) {
      router.get(path, (req: Request, res: Response) => {
        target[key](req, res);
      });
    }
  };
}
