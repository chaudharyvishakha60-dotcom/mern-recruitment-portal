const router = require("express").Router();
const { createJob, getJobs } = require("../controllers/jobController");
const auth = require("../middleware/authMiddleware");

router.get("/", getJobs);
router.post("/", auth, createJob);

module.exports = router;