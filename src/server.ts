import { resolve } from "path";

import dotenv from "dotenv";
import express from "express";
import next from "next";
import { getOrCreatePayloadClient } from "./data/payload";

// TODO: consider allowing .env.local?
dotenv.config({ path: resolve(__dirname, "../.env") });

const server = express();

const start = async (): Promise<void> => {
  const { logger } = await getOrCreatePayloadClient(server);
  const nextModule = next({ dev: process.env.NODE_ENV !== "production" });
  const nextHandler = nextModule.getRequestHandler();
  server.use((req, res) => nextHandler(req, res));

  logger.info("Starting NextJS...");
  await nextModule.prepare();
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    logger.info(`Server is listening on port ${port}`);
  });
};

start();
