import mongoose from "mongoose";

const PizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  ingredients: [String],
  image: String,
});

export default mongoose.models.Pizza || mongoose.model("Pizza", PizzaSchema, "Pizzas");
