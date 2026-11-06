"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAccountStore } from "../../store/accountStore";

const inputClass = "mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const primaryBtn = "mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white no-underline";

export default function Signin() {
  const router = useRouter();
  const signin = useAccountStore((state) => state.signin);
  const [username, setUsername] = useState("ada");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState("");
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign in</h3>
      <input
        placeholder="username"
        className={"wd-username " + inputClass}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        className={"wd-password " + inputClass}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input id="wd-ai-signin-note" placeholder="sample note" className={inputClass} />
      {error && <p className="mb-2 text-sm text-red-600">{error}</p>}
      <button
        type="button"
        id="wd-signin-btn"
        className={primaryBtn}
        onClick={() => {
          if (signin(username, password)) {
            router.push("/dashboard");
          } else {
            setError("Invalid username or password");
          }
        }}
      >
        Sign in
      </button>
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
