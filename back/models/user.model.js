const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
// il faut ajouter la cote de contrat (a, b, c,d...) un formulaire par ouvrier  sera dispatché en fonction de sa cote
// pe prévoir à ajouter les fomrulaires dans la db...

// vouloir une verification via mail... (temporaire pour le test)
const userSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
      unique: true,
      trim: true,
    },
    firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
      unique: false,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      maxlength: 8,
      minlength: 6,
    },
    division: {
      type: String,
      required: false,
      minlength: 3,
      maxlength: 30,
    },
    poste: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 30,
    },
    classification: {
      type: String,
      required: false,
      minlength: 1,
      maxlength: 20,
    },
    skills: [
      {
        name: { type: String },
        value: { type: String },
      },
    ],
    pmSkills: [
      {
        name: { type: String },
        value: { type: String },
      },
    ],
    date: Date,
    address1: {
      type: String,
      required: false,
      minlength: 20,
      maxlength: 40,
    },
    address2: {
      type: String,
      required: false,
      minlength: 20,
      maxlength: 40,
    },
    country: {
      type: String,
      required: false,
      minlength: 20,
      maxlength: 40,
    },
    city: {
      type: String,
      required: false,
      minlength: 20,
      maxlength: 40,
    },
    postalCode: {
      type: String,
      required: false,
      minlength: 20,
      maxlength: 40,
    },
    phoneNumber: {
      type: String,
      required: false,
      minlength: 20,
      maxlength: 40,
    },
    userForm: {
      type: Boolean,
    },
    techForm: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (lastname, password) {
  const user = await this.findOne({ lastname });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect lastname");
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
