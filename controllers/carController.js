const Car = require("../models/carModel");
const Seller = require("../models/sellerModel");
const {cloudinaryInstance} = require("../config/cloudinary");

//get all cars details
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
   return res.send(cars).status(200);
  } catch (error) {
    console.log("Error getting cars details:", error);
    res.status(404).send("Failed to find car details");
  }
};

//getting car details

const getCar = async (req, res) => {
  try {
    const car = await Car.find(Id);
    return res.send(car).status(200);

  } catch (error) {
    console.log("Error getting cars details:", error);
    res.status(404).send("Failed to find car details");
  }
};
//creating car

const createCar = async (req, res) => {
    try {
        if(!req.file){
            return res.status(404).send("file upload failed");
        }
        cloudinaryInstance.uploader.upload(req.file.path, async (req, res) =>{

            if (err) {
                console.log(err, "Error");
                return res.status(500).json({
                success: false,
                message: "Error uploading file to cloudinary",
                });
            }
        const imageUrl = result.url;
        const body = req.body;
        console.log(body, "body");
        
        })

        const  {carName,category,description,price,sellerEmail} = req.body;
        console.log(sellerEmail);

        const findSeller = await Seller.findOne({email: sellerEmail,});
        console.log(findSeller);

        if (!findSeller){
            return res.send("please add seller").status(201);
    } 
const createNewCar = new Car({
    carName,
    category,
    description,
    price,
    image: imageUrl,
});

const newCarCreated = createNewCar.save();
if (!newCarCreated) {
    return res.send("Car details are not added");
  }
    return res.send(newCarCreated);


}
    
    catch (error) {
    console.log("Error to add car", error);
    res.status(404).send("Failed to Add Car");
    }
};

module.exports = { getCars,getCar, createCar };
