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
  skills: [{ name: { type: String }, value: { type: String } }],
});

const OpinionPutmanServicesModel = mongoose.model("opinionPutman", OpinionPutmanServicesSchema);

module.exports = OpinionPutmanServicesModel;
