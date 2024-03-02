import { Payload } from "payload";

export const getPayloadClient = (): Payload | Promise<Payload> => {
  const shared = (global as any).payloadInstance;
  if (shared.runtime) return shared.runtime;
  if (shared.promise) return shared.promise;
  throw Error("Payload must be initialized.");
};
