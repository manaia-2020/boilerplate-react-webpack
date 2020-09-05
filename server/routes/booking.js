const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/", (req, res) => {
  db.getBookings()
    .then((bookings) => {
      res.json(bookings);
    })
    .catch((err) => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.post("/", (req, res) => {
  let { name, number, dateCreated, start, end, comments } = req.body;
  let newBooking = { name, number, dateCreated, start, end, comments };
  db.addBooking(newBooking)
    .then((ids) => {
      db.getSingleBooking(ids).then((post) => {
        res.json(post);
      });
    })
    .catch((err) => {
      res.status(500);
    });
});

router.patch("/:id", (req, res) => {
  let id = Number(req.params.id);
  let booking = {
    name: req.body.name,
    number: req.body.number,
    start: req.body.start,
    end: req.body.end,
    comments: req.body.comments,
  };
  db.updateBooking(booking, id)
    .then((ids) => {
      db.getBookings().then((post) => {
        res.json(post);
      });
    })
    .catch((err) => {
      res.status(500);
    });
});

router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  db.deleteBooking(id)
    .then((result) => {
      db.getBookings().then((bookings) => {
        res.json(bookings);
      });
    })
    .catch((err) => {
      res.status(500);
    });
});
module.exports = router;
