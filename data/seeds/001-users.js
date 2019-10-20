
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: "pam@dundermifflinpaperco.com", password: "pam123", role: "receptionist", company: "Dunder Mifflin Paper Co"}
      ]);
    });
};
