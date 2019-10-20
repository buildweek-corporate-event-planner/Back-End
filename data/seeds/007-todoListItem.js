
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todoListItem').del()
    .then(function () {
      // Inserts seed entries
      return knex('todoListItem').insert([
        {list_item: 'Order Pizza', completed: false, assigned_to_todoList: 1}
      ]);
    });
};
