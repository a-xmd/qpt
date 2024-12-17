import { db } from "./db";

export const handle = (_req: Request) => {
  const query = db.query("select * from article");
  return Response.json(query.all());
};
