
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {event_name: "Halloween Party", description: "Office Halloween Party", budget: 100, event_date: "2019-10-31", event_time: "06:00", assigned_to_user: 1}
      ]);
    });
};
