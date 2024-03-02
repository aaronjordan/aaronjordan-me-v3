import { WidgetCollection } from "$app/components/WidgetCollection";
import { getPayloadClient } from "$app/payload.server";
import { Chunk } from "$types/payload-types";
import { notFound } from "next/navigation";

async function lookup(chunk: string): Promise<Chunk | null> {
  "use server";

  const p = await getPayloadClient();
  const route = await p.find({
    collection: "chunk",
    where: { route: { equals: chunk } },
  });

  return route.docs[0];
}

export default async function Page({ params }: { params: { chunk: string } }) {
  const route = await lookup(params.chunk);
  if (!route) notFound();

  return (
    <>
      <article>
        <button>This is a button</button>
      </article>
      <WidgetCollection as="article" src={route.content} />
      <div style={{ marginTop: 48 }}>{JSON.stringify(route)}</div>
    </>
  );
}
