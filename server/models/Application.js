const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job"
  },
  resume: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Application", applicationSchema);