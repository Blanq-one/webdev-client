"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const idleClass = "list-group-item border-0 text-red-600";
  const activeClass = "list-group-item active border-0";
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none">
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-home-link"
        className={isActive(`/courses/${cid}/home`) ? activeClass : idleClass}
      >
        Home
      </Link>
      <Link
        href={`/courses/${cid}/modules`}
        id="wd-course-modules-link"
        className={isActive(`/courses/${cid}/modules`) ? activeClass : idleClass}
      >
        Modules
      </Link>
      <Link
        href={`/courses/${cid}/piazza`}
        id="wd-course-piazza-link"
        className={isActive(`/courses/${cid}/piazza`) ? activeClass : idleClass}
      >
        Piazza
      </Link>
      <Link
        href={`/courses/${cid}/zoom`}
        id="wd-course-zoom-link"
        className={isActive(`/courses/${cid}/zoom`) ? activeClass : idleClass}
      >
        Zoom
      </Link>
      <Link
        href={`/courses/${cid}/assignments`}
        id="wd-course-assignments-link"
        className={isActive(`/courses/${cid}/assignments`) ? activeClass : idleClass}
      >
        Assignments
      </Link>
      <Link
        href={`/courses/${cid}/quizzes`}
        id="wd-course-quizzes-link"
        className={isActive(`/courses/${cid}/quizzes`) ? activeClass : idleClass}
      >
        Quizzes
      </Link>
      <Link
        href={`/courses/${cid}/grades`}
        id="wd-course-grades-link"
        className={isActive(`/courses/${cid}/grades`) ? activeClass : idleClass}
      >
        Grades
      </Link>
      <Link
        href={`/courses/${cid}/people/table`}
        id="wd-course-people-link"
        className={isActive(`/courses/${cid}/people/table`) ? activeClass : idleClass}
      >
        People
      </Link>
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className={idleClass}
      >
        Sample
      </Link>
    </div>
  );
}
