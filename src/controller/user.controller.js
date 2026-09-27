import {User} from "../model/User.model.js";
 
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        res.status(201).json({ message: "User registered successfully" });

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
const user =  await User.create({
    username: username, 
    email: email.toLowerCase(),
    password
 })
  
 res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
}
// const getAllUser =async (req,res)=>{
//     try{

//     }
// };
 
export { registerUser, getAllUsers };