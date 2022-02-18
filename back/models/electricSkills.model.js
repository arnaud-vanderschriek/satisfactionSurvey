const mongoose = require("mongoose");

const ElectricSkillSchema = new mongoose.Schema({
  idUser: {
    type: String,
    require: true,
  },
  Manoeuvre: {
    value: String
  },
  ElectricPlan: {
    value: String,
  },
  Tableau: {
    value: String,
  },
  Cable: {
    value: String,
  },
  Plug: {
    value: String,
  },
  BuildingPlan: {
    value: String,
  },
});

const EletricSkillsModel = mongoose.model("skill", ElectricSkillSchema);

module.exports = EletricSkillsModel;
