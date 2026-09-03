import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/kit")({
  beforeLoad: () => {
    throw redirect({ to: "/history" });
  },
});
