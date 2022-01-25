const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
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

const SkillsModel = mongoose.model("skill", SkillSchema);

module.exports = SkillsModel;
