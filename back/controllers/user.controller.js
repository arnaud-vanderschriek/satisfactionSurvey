const UserModel = require("../models/user.model");
const EletricSkillsModel = require("../models/electricSkills.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.userInfo = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password");
};

// peut etre deplacer cette fonction dans un controller a part genre electricSkills.controller
module.exports.setDataUserChart = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const { manoeuvre, electricPlan, electricBox, cable, plug, buildingPlan } =
    req.body.data;

  try {
    const user = await EletricSkillsModel.create({
      idUser: req.params.id,
      manoeuvre,
      electricPlan,
      electricBox,
      cable,
      plug,
      buildingPlan,
    });

    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          techForm: true,
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

module.exports.addtionnalData = async (req, res) => {
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

module.exports.getDataTechForm = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  EletricSkillsModel.find({ idUser: req.params.id }, (err, docs) => {
    if (!err) res.status(201).json(docs);
    else console.log("ID unknown : " + err);
  });
};
