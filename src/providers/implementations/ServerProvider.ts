import { Application } from "express";
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

  private settings(): void {
    this.getServer();
  };

  private getServer(): void {
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  };
};

export { ServerProvider };
