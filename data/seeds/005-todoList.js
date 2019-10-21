
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todoList').del()
    .then(function () {
      // Inserts seed entries
      return knex('todoList').insert([
        {list_name: "Do It", assigned_to_event: 1}
      ]);
    });
};
