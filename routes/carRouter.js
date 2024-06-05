const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload-middleware");
const {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");


router.get("/car-lists",getCars);
router.get("/car-details",getCar);

router.post("/add-car",upload.single("image"),createCar);
router.put("/car-update/:id",updateCar);
router.delete("/car-detele/:id",deleteCar);

module.exports = router;

