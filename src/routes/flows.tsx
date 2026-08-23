import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { FlowMap } from "@/components/FlowMap";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/flows")({
  head: () => ({
    meta: [
      { title: "Gold and silver flows — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Animated map of historical gold and silver movements: Potosí, Manila, California, Witwatersrand, and the London market.",
      },
    ],
  }),
  component: FlowsPage,
});

function FlowsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Flows" }]} />
        <h1 className="font-display text-4xl">Historical metal flows</h1>
        <p className="mt-3 max-w-2xl text-muted">
          A visual companion to the history pillar. Each route is a link into the map — Potosí, the piece of eight, American gold, and the London market.
        </p>
        <div className="mt-8">
          <FlowMap />
        </div>
      </div>
    </SiteShell>
  );
}
