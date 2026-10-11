"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { FaInbox } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const accountActive = pathname.startsWith("/account");
  const dashboardActive =
    pathname === "/dashboard" || pathname.startsWith("/dashboard/");
  const coursesActive = pathname.startsWith("/courses");
  const calendarActive = pathname.startsWith("/calendar");
  const inboxActive = pathname.startsWith("/inbox");
  const labsActive = pathname.startsWith("/labs");
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/neu.png" width={75} height={75} alt="Northeastern University" className="mx-auto" />
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={
          accountActive
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <FaRegCircleUser
          className={
            accountActive
              ? "inline-block text-3xl text-red-600"
              : "inline-block text-3xl text-white"
          }
        />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={
          dashboardActive
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <AiOutlineDashboard
          className={
            dashboardActive
              ? "inline-block text-3xl text-red-600"
              : "inline-block text-3xl text-red-500"
          }
        />
        <br />
        Dashboard
      </Link>
      <Link
        href="/dashboard"
        id="wd-course-link"
        className={
          coursesActive
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <LiaBookSolid
          className={
            coursesActive
              ? "inline-block text-3xl text-red-600"
              : "inline-block text-3xl text-red-500"
          }
        />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className={
          calendarActive
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <IoCalendarOutline
          className={
            calendarActive
              ? "inline-block text-3xl text-red-600"
              : "inline-block text-3xl text-red-500"
          }
        />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className={
          inboxActive
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <FaInbox
          className={
            inboxActive
              ? "inline-block text-3xl text-red-600"
              : "inline-block text-3xl text-red-500"
          }
        />
        <br />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className={
          labsActive
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <LiaCogSolid
          className={
            labsActive
              ? "inline-block text-3xl text-red-600"
              : "inline-block text-3xl text-red-500"
          }
        />
        <br />
        Labs
      </Link>
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-500" />
        <br />
        Help
      </Link>
    </nav>
  );
}
