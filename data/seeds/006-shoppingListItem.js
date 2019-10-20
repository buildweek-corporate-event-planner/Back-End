
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoppingListItem').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingListItem').insert([
        {list_item: 'Balloons', purchased: false, assigned_to_shoppingList: 1}
      ]);
    });
};
