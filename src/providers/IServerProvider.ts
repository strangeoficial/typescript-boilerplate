import { Application } from "express";

export interface IServerProvider {
  start(): Application;
};
