import { ReactNode } from "react";
import { notFound } from "next/navigation";
import CourseNavigation from "./Navigation";
import CourseBreadcrumb from "./Breadcrumb";
import { getCourse } from "../../database";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  const course = getCourse(cid);
  if (!course) notFound();
  return (
    <div id="wd-courses">
      <CourseBreadcrumb courseName={course.name} />
      <hr />
      <div className="flex gap-4">
        <div className="hidden w-[140px] shrink-0 md:block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
