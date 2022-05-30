import { Application } from "express";
import { main } from "@route/public.routes";

export function CreateRoutes(app: Application): void {
  try {
    app.use("/", main);
  }
  catch (error: any) {
    console.error(`Não foi possivel carregar as rotas, problemas em: ${error}`);
  };
};
