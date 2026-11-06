"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccountStore } from "../../store/accountStore";

const inputClass = "mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const dangerBtn = "mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-sm font-medium text-white no-underline";

export default function Profile() {
  const router = useRouter();
  const { currentUser, signout } = useAccountStore();
  useEffect(() => {
    if (!currentUser) router.replace("/account/signin");
  }, [currentUser, router]);
  if (!currentUser) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>
      <input
        defaultValue={currentUser.username}
        placeholder="username"
        className={"wd-username " + inputClass}
      />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className={"wd-password " + inputClass}
      />
      <input defaultValue={currentUser.firstName} placeholder="First Name" id="wd-firstname" className={inputClass} />
      <input
        defaultValue={currentUser.lastName}
        placeholder="Last Name"
        id="wd-lastname"
        className={inputClass}
      />
      <input defaultValue={currentUser.dob} type="date" id="wd-dob" className={inputClass} />
      <input defaultValue={currentUser.email} type="email" id="wd-email" className={inputClass} />
      <select defaultValue={currentUser.role} id="wd-role" className={inputClass}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        id="wd-signout-btn"
        className={dangerBtn}
        onClick={() => {
          signout();
          router.push("/account/signin");
        }}
      >
        Sign out
      </button>
    </div>
  );
}
