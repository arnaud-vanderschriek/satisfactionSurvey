module.exports.signUpErrors = (err) => {
  let errors = {
    lastname: "",
    password: "",
  };
  console.log(err, 'err in helpers.error.js')
  if (err.message.includes("lastname")) {
    errors.lastname = "Nom de Famille incorrect ou déjà utilisé";
  }

  if (err.message.includes("email")) {
    errors.email = "Email incorrect";
  }

  if (err.message.includes("password")) {
    errors.password = "Le mot de passe doit faire 6 caractères minimum";
  }

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("lastname")) {
    errors.lastname = "Ce nom de famille est déjà pris";
  }

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email")) {
    errors.email = "Cet email est déjà enregistré";
  }

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = {
    lastname: "",
    password: "",
  };

  if (err.message.includes("lastname")) {
    errors.lastname = "lastName incorrect";
  }

  if (err.message.includes("password")) {
    errors.password = "mot de passe incorrect";
  }

  return errors;
};
