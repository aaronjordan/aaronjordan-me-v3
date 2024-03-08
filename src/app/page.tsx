import { WidgetCollection } from "$app/components/WidgetCollection";
import { lookupRoute } from "$app/utils/lookupRoute";

export default async function Page() {
  const route = await lookupRoute("/");
  return (
    <main className="container">
      <WidgetCollection as="article" src={route.content} />
    </main>
  );
}
