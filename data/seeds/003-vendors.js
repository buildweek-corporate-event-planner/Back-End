
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vendors').del()
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert([
        {vendor_name: "Alfredo's Pizza Cafe", assigned_to_event: 1}
      ]);
    });
};
