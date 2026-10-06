import {Router} from "express";
import {addToCart,getCart} from "../controller/cart.controller.js";

const router = Router();
router.route("/addCart").post(addToCart);
router.route("/items/:userId").get(getCart);

export default router;
