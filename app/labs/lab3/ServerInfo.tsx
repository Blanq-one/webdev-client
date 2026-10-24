import fs from "fs";
import path from "path";

export default function ServerInfo() {
  const files = fs.readdirSync(path.join(process.cwd(), "app", "labs", "lab3"));
  return (
    <div id="wd-server-component">
      <h3>Server Files (3.7.3)</h3>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      <h3>Server Information (3.7.4)</h3>
      <pre>{JSON.stringify({ arch: process.arch, platform: process.platform, node: process.version }, null, 2)}</pre>
    </div>
  );
}