"use client";
import { notFound, usePathname } from "next/navigation";
import { useCoursesStore } from "../../store/coursesStore";

const sections: Record<string, string> = {
  home: "Home",
  modules: "Modules",
  assignments: "Assignments",
  people: "People",
};

export default function CourseBreadcrumb({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const course = useCoursesStore((state) => state.courses.find((c) => c._id === cid));
  if (!course) notFound();
  const segment = pathname.split("/")[3] ?? "";
  const section =
    sections[segment] ?? segment.charAt(0).toUpperCase() + segment.slice(1);
  return <h2 id="wd-course-heading">{`${course.name} / ${section}`}</h2>;
}
