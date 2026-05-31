const router = require("express").Router();
const Application = require("../models/Application");
const auth = require("../middleware/authMiddleware");

router.post("/apply", async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;