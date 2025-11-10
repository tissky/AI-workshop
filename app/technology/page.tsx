import TechnologyPageContent from "./page-content";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function TechnologyPage() {
  return <TechnologyPageContent />;
}
