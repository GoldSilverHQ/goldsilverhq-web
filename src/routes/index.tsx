import { createFileRoute } from "@tanstack/react-router";
import { MetalsClock } from "@/components/MetalsClock";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global precious metals clock — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Gold and silver against world debt, money supply, central-bank reserves, and mine output. Clock skeleton — feeds next.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <MetalsClock />
    </SiteShell>
  );
}
