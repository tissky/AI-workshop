import { Metadata } from "next";
import { generateMetadataWithAlternates, PRODUCTS_DATA } from "@/lib/metadata";
import ProductsPageContent from "./page-content";

export const metadata: Metadata = generateMetadataWithAlternates(
  PRODUCTS_DATA.title,
  PRODUCTS_DATA.description,
  "/products",
  PRODUCTS_DATA.ogImage,
  PRODUCTS_DATA.keywords
);

export default function ProductsPage() {
  return <ProductsPageContent />;
}
