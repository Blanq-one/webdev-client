// Base URL of the Express server (webdev-server), with no trailing slash.
// Set NEXT_PUBLIC_HTTP_SERVER in .env.local for local work and in the host's
// environment settings when deploying. It must be written out literally as
// process.env.NEXT_PUBLIC_HTTP_SERVER so Next.js inlines it at build time.
export const HTTP_SERVER = (process.env.NEXT_PUBLIC_HTTP_SERVER ?? "").replace(/\/+$/, "");
