import Link from "next/link";

const inputClass = "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const rowClass = "mb-3 flex items-start gap-4";
const labelClass = "w-40 shrink-0 pt-2 text-right text-sm";
const boxClass = "rounded border border-neutral-300 p-3";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-3">
        <label htmlFor="wd-name" className="mb-1 block text-sm">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={inputClass} />
      </div>
      <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel." className={inputClass + " mb-4 h-48"} />
      <div className={rowClass}>
        <label className={labelClass} htmlFor="wd-points">Points</label>
        <div className="min-w-0 flex-1">
          <input id="wd-points" defaultValue={100} className={inputClass} />
        </div>
      </div>
      <div className={rowClass}>
        <label className={labelClass} htmlFor="wd-group">Assignment Group</label>
        <div className="min-w-0 flex-1">
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={inputClass}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>
      <div className={rowClass}>
        <label className={labelClass} htmlFor="wd-display-grade-as">Display Grade as</label>
        <div className="min-w-0 flex-1">
          <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={inputClass}>
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="COMPLETE_INCOMPLETE">Complete/Incomplete</option>
          </select>
        </div>
      </div>
      <div className={rowClass}>
        <label className={labelClass} htmlFor="wd-submission-type">Submission Type</label>
        <div className="min-w-0 flex-1">
          <select id="wd-submission-type" defaultValue="ONLINE" className={inputClass}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <div className={boxClass + " mt-3"}>
            <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
            <div className="mb-1 flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="mb-1 flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="mb-1 flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="mb-1 flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="mb-1 flex items-center gap-2 text-sm">
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>
      </div>
      <div className={rowClass}>
        <label className={labelClass}>Assign</label>
        <div className={boxClass + " flex-1"}>
          <div className="mb-3">
            <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-semibold">Assign to</label>
            <input id="wd-assign-to" defaultValue="Everyone" className={inputClass} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-due-date" className="mb-1 block text-sm font-semibold">Due</label>
            <input type="date" id="wd-due-date" defaultValue="2025-05-13" className={inputClass} />
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="mb-3">
                <label htmlFor="wd-available-from" className="mb-1 block text-sm font-semibold">Available from</label>
                <input type="date" id="wd-available-from" defaultValue="2025-05-06" className={inputClass} />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-3">
                <label htmlFor="wd-available-until" className="mb-1 block text-sm font-semibold">Until</label>
                <input type="date" id="wd-available-until" defaultValue="2025-05-20" className={inputClass} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm">Sample notes</label>
        <textarea id="wd-ai-editor-notes" className={inputClass + " h-24"} />
      </div>
      <div className="mt-4 flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
