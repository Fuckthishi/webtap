import { createFileRoute } from "@tanstack/react-router";
import EditStudio from "@/components/site/EditStudio";

export const Route = createFileRoute("/")({
  component: EditStudio,
});
