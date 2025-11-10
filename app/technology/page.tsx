import { Metadata } from "next";
import { generateMetadataWithAlternates, TECHNOLOGY_DATA } from "@/lib/metadata";
import TechnologyPageContent from "./page-content";

export const metadata: Metadata = generateMetadataWithAlternates(
  TECHNOLOGY_DATA.title,
  TECHNOLOGY_DATA.description,
  "/technology",
  TECHNOLOGY_DATA.ogImage,
  TECHNOLOGY_DATA.keywords
);

export default function TechnologyPage() {
  return <TechnologyPageContent />;
}
