import  {Food} from "../model/Food.model.js";

const createFood = async (req, res) => {
    try {
        const { name, description, price, category, stock, image } = req.body;

        const food = await Food.create({ name, description, price, category, stock, image });
        res.status(201).json({
            message: "Food created successfully",
            food
        });
    
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
};

const getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body,   { returnDocument: "after" });
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.status(200).json(
           { message: "Food updated successfully", food }
        );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createFood, getAllFoods, getFoodById, updateFood };