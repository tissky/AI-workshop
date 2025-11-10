import { Metadata } from "next";
import { generateMetadataWithAlternates, HOME_DATA } from "@/lib/metadata";
import HomeContent from "./page-content";

export const metadata: Metadata = generateMetadataWithAlternates(
  HOME_DATA.title,
  HOME_DATA.description,
  "/",
  HOME_DATA.ogImage,
  HOME_DATA.keywords
);

export default function Home() {
  return <HomeContent />;
}
