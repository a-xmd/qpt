import type { Request, Response, Router } from "express";

export function Get<
  ControllerType extends Record<
    keyof ControllerType,
    (req: Request, res: Response) => void
  >,
>(path: string, router: Router) {
  return function RegisterRoute(
    target: ControllerType,
    key: keyof ControllerType,
  ): void {
    router.get(path, (req: Request, res: Response) => {
      target[key](req, res);
    });
  };
}
