const router = require("express").Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.get("/getAllUsers", userController.getAllUsers);
router.get("/getDataTechForm/:id", userController.getDataTechFormPutmanServices);
router.get("/getDataTechFormInfratec2/:id",userController.getDataTechFormInfratec2);
router.post(
  "/dataTechFormPutmanServices/:id",
  userController.setDataChartPutmanServicesUser
);
router.post(
  "/dataTechFormInfratec2/:id",
  userController.setDataChartInfratec2User
);
//
router.post(
  "/dataTechFormPutmanServicesPm/:id",
  userController.setDataChartPutmanServicesPm
);
router.post(
  "/dataTechFormInfratec2Pm/:id",
  userController.setDataChartInfratec2Pm
);
router.post("/additionnalData/:id", userController.addtionnalData);

module.exports = router;
