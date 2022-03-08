const mongoose = require("mongoose");

const ElectricSkillSchema = new mongoose.Schema({
  idUser: {
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

const EletricSkillsModel = mongoose.model("skill", ElectricSkillSchema);

module.exports = EletricSkillsModel;
