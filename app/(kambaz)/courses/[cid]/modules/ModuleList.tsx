import Module from "./Module";
import Lesson from "./Lesson";
import { getModules } from "../../../database";

export default function ModuleList({ cid }: { cid: string }) {
  const modules = getModules(cid);
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
        {modules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name}>
                {lesson.items.map((item) => (
                  <li key={item} className="wd-content-item">
                    {item}
                  </li>
                ))}
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
      {modules.length === 0 && <p>No modules for this course yet.</p>}
    </div>
  );
}
