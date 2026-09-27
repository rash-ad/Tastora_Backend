import {Router} from "express";
import { registerUser,getAllUsers } from "../controller/user.controller.js";

 const router = Router();
 
 router.route('/register').post(registerUser);
 router.route('/allUsers').get(getAllUsers);

 export default router;