import Link from "next/link";

const inputClass = "mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const primaryBtn = "mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white no-underline";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign in</h3>
      <input
        placeholder="username"
        className={"wd-username " + inputClass}
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className={"wd-password " + inputClass}
        defaultValue="123"
      />
      <input id="wd-ai-signin-note" placeholder="sample note" className={inputClass} />
      <Link href="/dashboard" id="wd-signin-btn" className={primaryBtn}>
        Sign in
      </Link>
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
