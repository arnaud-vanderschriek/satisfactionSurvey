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
      minlength: 6,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: isEmail,
      lowercase: true,
      trim: true,
    },
    address: {
      type: String,
      minlength: 3,
      maxlength: 40,
    },
    departement: {
      type: String,
      require: false,
      minlength: 3,
      maxlength: 30,
    },
    position: {
      type: String,
      require: false,
      minlength: 2,
      maxlength: 20,
    },
    colleagues: {
      type: [String],
    },
    userForm: {
      type: Boolean,
    },
    techForm: {
      type: Boolean,
    }
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

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
