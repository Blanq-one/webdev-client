import Link from "next/link";

const inputClass = "mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const dangerBtn = "mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-sm font-medium text-white no-underline";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>
      <input
        defaultValue="alice"
        placeholder="username"
        className={"wd-username " + inputClass}
      />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className={"wd-password " + inputClass}
      />
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className={inputClass} />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className={inputClass}
      />
      <input defaultValue="2000-01-01" type="date" id="wd-dob" className={inputClass} />
      <input defaultValue="alice@wonderland" type="email" id="wd-email" className={inputClass} />
      <select defaultValue="FACULTY" id="wd-role" className={inputClass}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link href="/account/signin" className={dangerBtn}>Sign out</Link>
    </div>
  );
}
