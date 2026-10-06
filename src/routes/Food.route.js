import {Router} from "express";
import {getAllFoods,createFood,updateFood,getFoodById,deleteFood} from "../controller/Food.controller.js";

const router = Router();

router.route('/Foods').get(getAllFoods);
router.route('/addFood').post(createFood);
router.route('/updateFood/:id').put(updateFood);
router.route('/getFood/:id').get(getFoodById);
router.route('/deleteFood/:id').delete(deleteFood);
export default router;