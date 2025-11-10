import Link from "next/link";
import HomeNav from "@/components/HomeNav";
import HomeHero from "@/components/HomeHero";
import HomeCTA from "@/components/HomeCTA";
import Image from "next/image";
import { images } from "@/lib/media";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";
import HomeContent from "./page-content";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  
  return (
    <>
      <StructuredData data={[organizationSchema, websiteSchema]} />
      <HomeContent />
    </>
  );
}
