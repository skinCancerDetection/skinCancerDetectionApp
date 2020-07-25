// const router = require("express").Router();
// let db = require("../database/models");

// router.route("/patient/appointments").get((req, res) => {
//   db.Appointment.find({ _id: req.body.userId })
//     .then((appointment) => res.json(appointment))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// module.exports = router;

const router = require("express").Router();
const models = require("../database/models");

router.post("/patient/appointments", function (req, res) {
  models.Patient.findById(JSON.parse(req.body.params.data.id), function (err, appoint) {
    res.send(appoint)
  });
});

module.exports = router;