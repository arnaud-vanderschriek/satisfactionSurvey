const router = require("express").Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

router.post("/register", authController.signUp);
router.post("/login", authController.signIn);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.get('/getDataTechForm/:id', userController.getDataTechForm)
router.post("/dataTechForm/:id", userController.setDataUserChart);
router.post("/additionnalData/:id", userController.addtionnalData);

module.exports = router;
