const UserModel = require("../models/user.model");
const EletricSkillsModel = require("../models/electricSkills.model");
const RailWaySkillsModel = require("../models/railwaySkills.model");
const OpinionPutmanServicesModel = require("../models/opinionPutmanServices");
const OpinionInfratec2Model = require("../models/opinionInfratec2");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    setTimeout(() => {
      res.status(200).json(users);
    }, 20000);
  } catch (err) {
    console.log({ message: err });
  }
};

module.exports.userInfo = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown tagada: " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password");
};

// peut etre deplacer cette fonction dans un controller a part genre electricSkills.controller
module.exports.setDataChartPutmanServicesUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const { manoeuvre, electricPlan, electricBox, cable, plug, buildingPlan } =
    req.body.data;

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          techForm: true,
          skills: [
            {
              name: "manoeuvre",
              value: manoeuvre,
            },
            {
              name: "electricPlan",
              value: electricPlan,
            },
            {
              name: "electricBox",
              value: electricBox,
            },
            {
              name: "cable",
              value: cable,
            },
            {
              name: "plug",
              value: plug,
            },
            {
              name: "buildingPlan",
              value: buildingPlan,
            },
          ],
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ),
      res.status(201).json({ user: user._id });
  } catch (err) {
    // const errors = signUpErrors(err);
    res.status(200).send({ err });
  }
};

module.exports.setDataChartInfratec2User = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    checksonnel,
    skillsExplorer,
    cartoSkills,
    mapSkills,
    skillsnetwork,
    skillBook,
  } = req.body.data;

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          techForm: true,
          skills: [
            {
              name: "checksonnel",
              value: checksonnel,
            },
            {
              name: "skillsExplorer",
              value: skillsExplorer,
            },
            {
              name: "cartoSkills",
              value: cartoSkills,
            },
            {
              name: "mapSkills",
              value: mapSkills,
            },
            {
              name: "skillsnetwork",
              value: skillsnetwork,
            },
            {
              name: "skillBook",
              value: skillBook,
            },
          ],
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ),
      res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};

module.exports.setDataChartPutmanServicesPm = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  const { manoeuvre, electricPlan, electricBox, cable, plug, buildingPlan } =
    req.body.data;

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          pmSkills: [
            {
              name: "manoeuvre",
              value: manoeuvre,
            },
            {
              name: "electricPlan",
              value: electricPlan,
            },
            {
              name: "electricBox",
              value: electricBox,
            },
            {
              name: "cable",
              value: cable,
            },
            {
              name: "plug",
              value: plug,
            },
            {
              name: "buildingPlan",
              value: buildingPlan,
            },
          ],
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ),
      res.status(201).json({ user: user._id });
  } catch (err) {
    // const errors = signUpErrors(err);
    res.status(200).send({ err });
  }
};

module.exports.setDataChartInfratec2Pm = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    idUserEval,
    checksonnel,
    skillsExplorer,
    cartoSkills,
    mapSkills,
    skillsnetwork,
    skillBook,
  } = req.body.data;

  try {
    await UserModel.findOneAndUpdate(
      { _id: idUserEval },
      {
        $set: {
          pmSkills: [
            {
              name: "checksonnel",
              value: checksonnel,
            },
            {
              name: "skillsExplorer",
              value: skillsExplorer,
            },
            {
              name: "cartoSkills",
              value: cartoSkills,
            },
            {
              name: "mapSkills",
              value: mapSkills,
            },
            {
              name: "skillsnetwork",
              value: skillsnetwork,
            },
            {
              name: "skillBook",
              value: skillBook,
            },
          ],
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ),
      res.status(201).json({ user: user._id });
  } catch (err) {
    // const errors = signUpErrors(err);
    res.status(200).send({ err });
  }
};

module.exports.addtionnalData = async (req, res) => {
  console.log("g");

  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          address1: req.body.data.address1,
          address2: req.body.data.address2,
          city: req.body.data.city,
          country: req.body.data.country,
          postalCode: req.body.data.postalCode,
          phoneNumber: req.body.data.phoneNumber,
          userForm: true,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        else return res.status(400).json(err);
      }
    );
  } catch (err) {
    // return res.status(400).json({ message: err })
    console.log({ message: err });
  }
};

module.exports.getDataTechFormPutmanServices = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.find({ _id: req.params.id }, (err, docs) => {
    if (!err) res.status(201).json(docs);
    else console.log("ID unknown : " + err);
  });
};

module.exports.getDataTechFormInfratec2 = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  RailWaySkillsModel.find({ idUser: req.params.id }, (err, docs) => {
    if (!err) res.status(201).json(docs);
    else console.log("ID unknown : " + err);
  });
};

module.exports.getAllDatasFromWorkers = async (req, res) => {
  try {
    const datasOnWorkers = await EletricSkillsModel.find({});
    res.status(200).json(datasOnWorkers);
  } catch (err) {
    console.log({ message: err });
  }
};

module.exports.getAllDatasFromPmPutmanServices = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  OpinionPutmanServicesModel.find({ idPm: req.params.id }, (err, docs) => {
    if (!err) res.status(201).json(docs);
    else console.log("ID unknown : " + err);
  });
};
