import express from "express";
import { ServerProvider } from "../providers/implementations/ServerProvider";

const app = express();

const server = new ServerProvider(app, 4000);

export { server };
