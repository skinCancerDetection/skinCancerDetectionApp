const router = require("express").Router();
const models = require("../database/models");

router.post("/patient/appointments", function (req, res) {
  models.Patient.findById(JSON.parse(req.body.params.data.id), function (err, appoint) {
    res.send(appoint)
  });
});

module.exports = router;