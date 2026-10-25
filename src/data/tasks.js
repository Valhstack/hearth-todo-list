/* Task{
     id,
  title,
  description: "",
  projectId: null,
  due: "2026-10-26" | null,            // date only, local
  priority: "low" | "medium" | "high" | null,
  subtasks: [ { id, title, doneAt: null } ],
  doneAt: null,                        // done = this is set
  source: { noteId, blockId } | null,  // set when it came from a note
  createdAt, updatedAt, deletedAt: null
}*/

const createTask = (title, due, priority) => ({
    id: crypto.randomUUID(),
    title: title,
    description: "",
    projectId: null,
    due: due ?? null,            // date only, local
    priority: priority ?? null,
    subtasks: [],
    doneAt: null,                        // done = this is set
    source: null,  // set when it came from a note
    createdAt: (new Date()).toISOString(),
    updatedAt: null,
    deletedAt: null
});

const saveTasks = function (tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasks = function () {
    return JSON.parse(localStorage.getItem("tasks")) || [];
};

export { createTask, saveTasks, loadTasks };