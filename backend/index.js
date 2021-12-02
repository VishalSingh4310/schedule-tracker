const express = require("express");
const app = express();
// const schedule = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser());
app.use(cors());

let schedule = [
  {
    id: 1,
    time_slot_from: 9,
    time_slot_to: 10,
    schedule: [
      {
        first_name: "demo",
        last_name: "demo_last",
        phone: "1234567890",
      },
    ],
  },
  {
    id: 2,
    time_slot_from: 10,
    time_slot_to: 11,
    schedule: [],
  },
  {
    id: 3,
    time_slot_from: 11,
    time_slot_to: 12,
    schedule: [],
  },
  {
    id: 4,
    time_slot_from: 12,
    time_slot_to: 13,
    schedule: [],
  },
  {
    id: 5,
    time_slot_from: 13,
    time_slot_to: 14,
    schedule: [],
  },
  {
    id: 6,
    time_slot_from: 14,
    time_slot_to: 15,
    schedule: [],
  },
  {
    id: 7,
    time_slot_from: 15,
    time_slot_to: 16,
    schedule: [],
  },
  {
    id: 8,
    time_slot_from: 16,
    time_slot_to: 17,
    schedule: [],
  },
];

app.get("/", (req, res) => {
  res.json(schedule);
});

app.post("/", (req, res) => {
  schedule = schedule.map((item) => {
    if (item.id == parseInt(req.body.id)) {
      item.schedule = [
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone,
        },
      ];
    }
    return item;
  });
  console.log(schedule);
  res.send(schedule);
});

app.get("/delete", (req, res) => {
  console.log(typeof req.query.id);
  schedule = schedule.map((item) => {
    if (item.id == parseInt(req.query.id)) {
      item.schedule = [];
      console.log(item);
    }

    return item;
  });
  res.send(schedule);
});
app.listen(3001, () => {
  console.log("server started at port 3001");
});
