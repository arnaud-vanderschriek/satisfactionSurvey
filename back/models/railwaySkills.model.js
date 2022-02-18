const mongoose = require("mongoose");

const RailwaySkillSchema = new mongoose.Schema({
  idUser: {
    type: String,
    require: true,
  },
  Checksonnel: {
    value: String,
  },
  SkillsExplorer: {
    value: String,
  },
  CartoSkills: {
    value: String,
  },
  MapSkills: {
    value: String,
  },
  Skillsnetwork: {
    value: String,
  },
  SkillBook: {
    value: String
  }
});

const RailWaySkillsModel = mongoose.model("skill", RailwaySkillSchema);

module.exports = RailWaySkillsModel;
