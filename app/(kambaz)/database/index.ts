import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import enrollments from "./enrollments.json";

export { courses, modules, assignments, users, enrollments };

export const getCourse = (cid: string) => courses.find((c) => c._id === cid);
export const getModules = (cid: string) => modules.filter((m) => m.course === cid);
export const getAssignments = (cid: string) =>
  assignments.filter((a) => a.course === cid);
export const getAssignment = (cid: string, aid: string) =>
  assignments.find((a) => a.course === cid && a._id === aid);
export const getEnrolledUsers = (cid: string) =>
  enrollments
    .filter((e) => e.course === cid)
    .map((e) => users.find((u) => u._id === e.user))
    .filter((u): u is (typeof users)[number] => u !== undefined);

const formatDate = (iso: string, time: string) =>
  `${new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })} at ${time}`;

export const assignmentDetails = (a: (typeof assignments)[number]) =>
  `Multiple Modules | Not available until ${formatDate(a.availableFrom, "12:00am")} | Due ${formatDate(a.dueDate, "11:59pm")} | ${a.points} pts`;
