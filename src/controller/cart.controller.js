import {cart} from "../model/cart.model.js";

const addToCart = async (req, res) => {
    try {
        const { userId, foodId, quantity } = req.body;

        let userCart = await cart.findOne({ userId });
        if (!userCart) {
            userCart = new cart({ userId, items: [] });
        }

        const existingItemIndex = userCart.items.findIndex(item => item.foodId.toString() === foodId);
        if (existingItemIndex !== -1) {
            userCart.items[existingItemIndex].quantity += quantity;
        } else {
            userCart.items.push({ foodId, quantity });
        }
        await userCart.save();
        res.status(200).json({ message: "Item added to cart successfully", cart: userCart });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCart = async (req, res) => {
    try {
        const { userId } = req.params;

        const userCart = await cart.findOne({ userId }).populate("items.foodId");
        if (!userCart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json(userCart);
    } catch (error) {

        res.status(400).json({ message: error.message });
    }
};
export { addToCart, getCart };