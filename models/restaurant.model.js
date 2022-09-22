import { Schema, model } from "mongoose";

const restaurantSchema = new Schema({
  name: {type: String, required: true, minLength:3},
  address: {type: String, required: true, minLength: 6},
  type: {
    type: String,
    enum: ["Italiana", "Japonesa", "Árabe", "Brasileira", "Doces e Bolos", "Mexicana", "Outro"],
    required: true    
  },
  acceptsRetirada: {type: Boolean, required: true}  
});

export const RestaurantModel = model("Restaurant", restaurantSchema);


