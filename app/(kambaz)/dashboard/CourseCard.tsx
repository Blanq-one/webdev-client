"use client";
import Link from "next/link";
import Image from "next/image";

export default function CourseCard({
  id, title, subtitle, image, onEdit, onDelete,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={image}
          width={300}
          height={160}
          alt={title}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">
            {title}
          </h5>
          <p className="wd-dashboard-course-title m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {subtitle}
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Go
          </button>
          <button
            type="button"
            id="wd-edit-course-click"
            className="ms-2 inline-flex items-center justify-center rounded bg-yellow-500 px-3 py-1.5 text-sm font-medium text-black"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onEdit();
            }}
          >
            Edit
          </button>
          <button
            type="button"
            id="wd-delete-course-click"
            className="ms-2 inline-flex items-center justify-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDelete();
            }}
          >
            Delete
          </button>
        </div>
      </Link>
    </div>
  );
}
