import React, { useEffect, useRef } from "react";
import VLink from "../VLink";

interface Breadcrumb {
  label: string;
  url: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const NavBreadcrumb: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  const inputElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputElement.current?.scrollTo(inputElement.current.scrollWidth, 0);
  });
  return (
    <nav>
      <div
        className="breadcrumbcontainer flex overflow-x-scroll"
        ref={inputElement}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <div className="text-xs" key={index}>
            {index > 0 && <span className="px-1 text-[#89939E]">/</span>}
            <VLink
              label={breadcrumb.label}
              href={breadcrumb.url}
              disabled={index === breadcrumbs.length - 1}
            />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBreadcrumb;
