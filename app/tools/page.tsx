"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import StructuredData from "@/components/StructuredData";
import { useState } from "react";
import { generateToolListSchema } from "@/lib/seo";

const QRModal = dynamic(() => import("@/components/QRModal"), {
  ssr: false,
  loading: () => null
});

export default function ToolsPage() {
  return <ToolsPageContent />;
}
