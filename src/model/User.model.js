import mongoose,{Schema} from "mongoose";
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 75,
        required: true,
    },
    // role: {
    //     type: String,
    //     enum: ["user", "admin"],
    //     default: "user",
    // },

},
 {
    timestamps: true
});
export const User = mongoose.model("User", UserSchema);
