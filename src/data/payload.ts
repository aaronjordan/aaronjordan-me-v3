import { resolve } from "path";

import dotenv from "dotenv";
import { Express } from "express";
import payload, { Payload } from "payload";

import config from "./payload.config";

dotenv.config({ path: resolve(__dirname, "../../.env") });

let shared = (global as any).payloadInstance;
if (!shared) {
  shared = (global as any).payloadInstance = { runtime: null, promise: null };
}

export const getOrCreatePayloadClient = (
  server?: Express,
): Payload | Promise<Payload> => {
  if (shared.runtime) return shared.runtime;
  if (shared.promise) return shared.promise;

  shared.promise = new Promise(async (res, rej) => {
    try {
      const runtime = await payload.init({
        ...config,
        express: server,
        secret: process.env.PAYLOAD_SECRET,
      });
      shared.runtime = runtime;
      delete shared.promise;
      res(runtime);
    } catch (e) {
      rej(e);
    }
  });

  return shared.promise;
};
