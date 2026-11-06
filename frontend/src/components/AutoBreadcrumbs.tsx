"use client";

import { usePathname } from "next/navigation";
import Breadcrumbs, { type BreadcrumbItem } from "./Breadcrumbs";

// etichete frumoase pentru segmentele cunoscute
const LABELS: Record<string, string> = {
  produse: "Produse",
  contact: "Contact",
  despre: "Despre noi",
};

function formatSegment(segment: string) {
  if (LABELS[segment]) return LABELS[segment];
  const text = decodeURIComponent(segment).replace(/-/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function AutoBreadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const items: BreadcrumbItem[] = [
    { label: "Acasă", href: "/" },
    ...segments.map((segment, index) => ({
      label: formatSegment(segment),
      href: "/" + segments.slice(0, index + 1).join("/"),
    })),
  ];

  return <Breadcrumbs items={items} />;
}
