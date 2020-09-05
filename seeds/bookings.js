exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Bookings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Bookings").insert([
        {
          id: 1,
          name: "Maxime",
          number: 278433871,
          dateCreated: new Date(Date.now()),
          start: new Date(2020, 8, 6, 15, 0),
          end: new Date(2020, 8, 6, 16, 0),
          comments: "I wanna go flying",
        },
      ]);
    });
};
