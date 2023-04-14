const resources = [
  { resource_name: "Laptop", resource_description: "MacBook Pro" },
  { resource_name: "Text editor", resource_description: "Visual Studio Code" },
  { resource_name: "Writing software", resource_description: "Scrivener" },
  { resource_name: "Writing desk" },
]

exports.resources = resources

exports.seed = function (knex) {
  return knex('resources').insert(resources)
}