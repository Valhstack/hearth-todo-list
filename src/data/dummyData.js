import { createTask, saveTasks, loadTasks } from "./tasks";

export function populateData() {
    if (loadTasks().length > 0) return;

    const dummyTasks = [];

    dummyTasks.push(createTask('Reply to invoice question', '2026-10-25', 'medium'));
    dummyTasks.push(createTask('Prepare onboarding checklist', '2026-10-25', 'high'));
    dummyTasks.push(createTask('Review reporting workflow change', '2026-10-25', 'high'));

    saveTasks(dummyTasks);
}