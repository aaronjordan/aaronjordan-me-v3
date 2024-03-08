"use server";
import { getPayloadClient } from "$app/payload.server";
import { Chunk } from "$types/payload-types";

export async function lookupRoute(chunk: string): Promise<Chunk | null> {
  const payload = await getPayloadClient();
  const route = await payload.find({
    collection: "chunk",
    where: { route: { equals: chunk } },
  });

  return route.docs[0];
}
