const mongoose = require("mongoose");

const RailwaySkillSchema = new mongoose.Schema({
  idUser: {
    type: String,
    require: true,
  },
  checkSonnel: {
    type: String,
  },
  skillsExplorer: {
    type: String,
  },
  cartoSkills: {
    type: String,
  },
  mapSkills: {
    type: String,
  },
  skillsNetwork: {
    type: String,
  },
  skillBook: {
    type: String
  }
});

const RailWaySkillsModel = mongoose.model("infratec2skills", RailwaySkillSchema);

module.exports = RailWaySkillsModel;
