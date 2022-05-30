import { Application, json, urlencoded } from "express";
import { IServerProvider } from "../IServerProvider";

class ServerProvider implements IServerProvider {
  constructor(
    private server: Application,
    private port: number,
  ) {
    this.settings();
  };

  public start(): Application {
    return this.server;
  };

  private middlewares(): void {
    this.server.use(json());
    this.server.use(urlencoded({ extended: true }));
  };

  private settings(): void {
    this.middlewares();
    this.getServer();
  };

  private getServer(): void {
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  };
};

export { ServerProvider };
