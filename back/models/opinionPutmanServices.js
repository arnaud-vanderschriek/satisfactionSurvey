const mongoose = require("mongoose");

const OpinionPutmanServicesSchema = new mongoose.Schema({
  idPm: {
    type: String,
    require: true,
  },
  idUserEval: {
    type: String,
    require: true,
  },
  manoeuvre: {
    type: String
  },
  electricPlan: {
    type: String,
  },
  electricBox: {
    type: String,
  },
  cable: {
    type: String,
  },
  plug: {
    type: String,
  },
  buildingPlan: {
    type: String,
  },
});

const OpinionPutmanServicesModel = mongoose.model("opinionPutman", OpinionPutmanServicesSchema);

module.exports = OpinionPutmanServicesModel;
