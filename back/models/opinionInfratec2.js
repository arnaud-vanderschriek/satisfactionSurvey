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
  skills: [{ name: { type: String }, value: { type: String } }],
});

const OpinionInfratec2Model = mongoose.model("opinionInfratec2", OpinionInfratec2Schema);

module.exports = OpinionInfratec2Model;
