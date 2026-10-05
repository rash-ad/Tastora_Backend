import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    
    image: {
        type: String,
        required: true
    },

    
    
});
export const Food = mongoose.model("Food", FoodSchema);