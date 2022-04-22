const mongoose = require("mongoose");

const OpinionInfratec2Schema = new mongoose.Schema({
  idPm: {
    type: String,
    require: true,
  },
  idUserEval: {
    type: String,
    require: true,
  },
  checkSonnel: {
    type: String
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
  skillsBook: {
    type: String,
  },
});

const OpinionInfratec2Model = mongoose.model("opinionInfratec2", OpinionInfratec2Schema);

module.exports = OpinionInfratec2Model;
