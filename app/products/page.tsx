"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { generateProductListSchema } from "@/lib/seo";

const ImageCarousel = dynamic(() => import("@/components/ImageCarousel"), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-3xl" />
});

export default function ProductsPage() {
  return <ProductsPageContent />;
}
