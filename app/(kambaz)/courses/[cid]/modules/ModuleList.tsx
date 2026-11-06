"use client";
import { useState } from "react";
import Module from "./Module";
import Lesson from "./Lesson";
import { useModulesStore } from "../../../store/modulesStore";

export default function ModuleList({ cid }: { cid: string }) {
  const { modules: allModules, addModule, deleteModule, updateModule } = useModulesStore();
  const modules = allModules.filter((m) => m.course === cid);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const reset = () => {
    setName("");
    setEditingId(null);
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">Collapse All</button>
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">View Progress</button>
        <select defaultValue="publish-all" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
          <option value="publish-all">Publish All</option>
        </select>
        <input
          id="wd-module-name"
          placeholder="Module name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        />
        {editingId === null ? (
          <button
            type="button"
            id="wd-add-module-click"
            className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => {
              addModule(cid, name);
              reset();
            }}
          >
            + Module
          </button>
        ) : (
          <button
            type="button"
            id="wd-update-module-click"
            className="rounded border border-blue-600 bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => {
              updateModule(editingId, name);
              reset();
            }}
          >
            Update Module
          </button>
        )}
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            title={module.name}
            onEdit={() => {
              setEditingId(module._id);
              setName(module.name);
            }}
            onDelete={() => {
              deleteModule(module._id);
              if (module._id === editingId) reset();
            }}
          >
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
