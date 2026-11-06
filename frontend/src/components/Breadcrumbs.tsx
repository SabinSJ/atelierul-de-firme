import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-2 text-xs text-[#71808b] sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {index > 0 && <span aria-hidden="true">/</span>}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#00c6ff]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-[#f4f8fb]" : "text-[#a9bac5]"}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
