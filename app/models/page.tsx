import { Metadata } from "next";
import { generateMetadataWithAlternates, MODELS_DATA } from "@/lib/metadata";
import ModelsPageContent from "./page-content";

export const metadata: Metadata = generateMetadataWithAlternates(
  MODELS_DATA.title,
  MODELS_DATA.description,
  "/models",
  MODELS_DATA.ogImage,
  MODELS_DATA.keywords
);

export default function ModelsPage() {
  return <ModelsPageContent />;
}
