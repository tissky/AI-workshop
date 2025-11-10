import { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";
import ToolDetailPageContent from "./page-content";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return generateToolMetadata(id);
}

export default async function ToolDetailPage({ params }: Props) {
  const { id } = await params;
  return <ToolDetailPageContent toolId={id} />;
}
