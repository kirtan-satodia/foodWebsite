const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Kirtansatodia1710:Kirtan123@gofood.878ca61.mongodb.net/GoFoodDATA?retryWrites=true&w=majority";
const mongoDB = async () => {
  mongoose.connect(mongoURI, async (err, result) => {
    if (err) console.log("---", err);
    else {
      console.log("Connected");
      const fetched_data = mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = mongoose.connection.db.collection("food_category");
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) console.log(err);
          else {
            global.food_items = data;
            global.foodCategory = catData;
          }
        });
      });
    }
  });
};

module.exports = mongoDB;
