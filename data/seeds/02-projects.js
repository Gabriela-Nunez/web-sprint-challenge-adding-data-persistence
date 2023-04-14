const projects = [
  { project_name: "Build a website" },
  { project_name: "Create a mobile app", project_description: "An app that helps users track their daily expenses" },
  { project_name: "Write a book", project_completed: true },
]


exports.projects = projects

exports.seed = function(knex) {
  return knex('projects').insert(projects)
  
}