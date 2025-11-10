import Link from "next/link";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function CompanyPage() {
  return <CompanyPageContent />;
}
