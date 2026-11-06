import type { ReactNode } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function Module({
  title,
  onEdit,
  onDelete,
  children,
}: {
  title: string;
  onEdit: () => void;
  onDelete: () => void;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 font-semibold">
        <span>{title}</span>
        <span className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Edit module"
            id="wd-edit-module-click"
            className="text-blue-600"
            onClick={onEdit}
          >
            <FaPencil />
          </button>
          <button
            type="button"
            aria-label="Delete module"
            id="wd-delete-module-click"
            className="text-red-600"
            onClick={onDelete}
          >
            <FaTrash />
          </button>
          <GreenCheckmark />
        </span>
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
