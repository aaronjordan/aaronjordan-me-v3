import { notFound } from "next/navigation";
import { WidgetCollection } from "$app/components/WidgetCollection";
import { lookupRoute } from "$app/utils/lookupRoute";

export default async function Page({ params }: { params: { chunk: string } }) {
  const route = await lookupRoute(params.chunk);
  if (!route) notFound();

  return (
    <main className="container">
      <WidgetCollection as="article" src={route.content} />
    </main>
  );
}
