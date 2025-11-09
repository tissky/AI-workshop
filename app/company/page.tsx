import { Metadata } from "next";
import { generateMetadataWithAlternates, COMPANY_DATA } from "@/lib/metadata";
import CompanyPageContent from "./page-content";

export const metadata: Metadata = generateMetadataWithAlternates(
  COMPANY_DATA.title,
  COMPANY_DATA.description,
  "/company",
  COMPANY_DATA.ogImage,
  COMPANY_DATA.keywords
);

export default function CompanyPage() {
  return <CompanyPageContent />;
}
