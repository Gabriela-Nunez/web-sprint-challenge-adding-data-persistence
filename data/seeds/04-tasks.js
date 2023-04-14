
const tasks = [
  { task_description: "Design the UI", project_id: 1 },
  { task_description: "Implement the back-end", project_id: 1, task_completed: true },
  { task_description: "Create the landing page", project_id: 1 },
  { task_description: "Create the expense tracking feature", project_id: 2 },
  { task_description: "Write the outline", project_id: 3 },
  { task_description: "Write the first chapter", project_id: 3, task_completed: true },
  { task_description: "Edit the first chapter", project_id: 3 },
]

exports.tasks = tasks

exports.seed = function (knex) {
  return knex('tasks').insert(tasks)
}