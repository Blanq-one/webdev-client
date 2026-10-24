"use client";
import { usePathname } from "next/navigation";

const sections: Record<string, string> = {
  home: "Home",
  modules: "Modules",
  assignments: "Assignments",
  people: "People",
};

export default function CourseBreadcrumb({ courseName }: { courseName: string }) {
  const pathname = usePathname() ?? "";
  const segment = pathname.split("/")[3] ?? "";
  const section =
    sections[segment] ?? segment.charAt(0).toUpperCase() + segment.slice(1);
  return <h2 id="wd-course-heading">{`${courseName} / ${section}`}</h2>;
}
