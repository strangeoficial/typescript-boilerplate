import { Router } from "express";

const main = Router();

main.all("/", (req, res) => {
  res.status(200).json({ message: "Ok" });
});

main.all("/message/:message", (req, res) => {
  var message = req.params.message;

  res.status(201).json({ message: message });
});

main.all("*", (req, res) => {
  let url = req.url;

  return res.status(404).json({ error: `A rota ${url} não foi encontrada!` });
});

export { main };
