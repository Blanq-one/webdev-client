import Module from "./Module";
import Lesson from "./Lesson";
export default function Modules() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">Collapse All</button>
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">View Progress</button>
        <select defaultValue="publish-all" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
          <option value="publish-all">Publish All</option>
        </select>
        <button type="button" className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white">+ Module</button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
          <Lesson title="GEN Z SLANG LESSONS">
            <li className="wd-content-item">Rizz means charisma, as in how smooth someone is when they talk.</li>
            <li className="wd-content-item">No cap means no lie, as in &quot;I&apos;m being serious.&quot;</li>
          </Lesson>
          <Lesson title="PRACTICE SLANG">
            <li className="wd-content-item">Use &quot;no cap&quot; and &quot;lowkey&quot; in two sentences of your own.</li>
            <li className="wd-content-item">Translate three slang words into plain English.</li>
          </Lesson>
          <Lesson title="GEN Z SLIDES">
            <li className="wd-content-item">Slang from the last five years, with examples</li>
            <li className="wd-content-item">Quiz: which word means something is great?</li>
          </Lesson>
        </Module>
        <Module title="Week 2">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
          </Lesson>
        </Module>
        <Module title="Week 3">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">CSS Styling</li>
          </Lesson>
        </Module>
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)" />
        </Module>
      </ul>
    </div>
  );
}
