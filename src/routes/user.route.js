import {Router} from "express";
import { registerUser,getAllUsers,loginUser,logoutUser, } from "../controller/user.controller.js";

 const router = Router();

 router.route('/register').post(registerUser);
 router.route('/allUsers').get(getAllUsers);
 router.route('/login').post(loginUser);
 router.route('/logout').post(logoutUser);
 export default router;