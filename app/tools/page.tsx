import { Metadata } from "next";
import { generateMetadataWithAlternates, TOOLS_DATA } from "@/lib/metadata";
import ToolsPageContent from "./page-content";

export const metadata: Metadata = generateMetadataWithAlternates(
  TOOLS_DATA.title,
  TOOLS_DATA.description,
  "/tools",
  TOOLS_DATA.ogImage,
  TOOLS_DATA.keywords
);

export default function ToolsPage() {
  return <ToolsPageContent />;
}
