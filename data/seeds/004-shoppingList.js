
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoppingList').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingList').insert([
        {list_item: "Decorations", purchased: false, assigned_to_event: 1}
      ]);
    });
};
