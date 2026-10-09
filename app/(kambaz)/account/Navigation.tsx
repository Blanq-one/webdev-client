"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const isActive = (href: string) => pathname === href;
  const idleClass = "list-group-item border-0 text-red-600";
  const activeClass = "list-group-item active border-0";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none">
      <Link
        href="/account/signin"
        className={isActive("/account/signin") ? activeClass : idleClass}
      >
        Signin
      </Link>
      <Link
        href="/account/signup"
        className={isActive("/account/signup") ? activeClass : idleClass}
      >
        Signup
      </Link>
      <Link
        href="/account/profile"
        className={isActive("/account/profile") ? activeClass : idleClass}
      >
        Profile
      </Link>
    </div>
  );
}
