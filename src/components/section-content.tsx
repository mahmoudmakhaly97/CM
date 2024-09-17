"use client";

import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "usehooks-ts";

const SectionContent = ({ children, className }) => {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity ease-in duration-[1s]",
        isIntersecting ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { SectionContent };
