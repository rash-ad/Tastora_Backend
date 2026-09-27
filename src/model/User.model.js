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

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password"))  return next();
        this.password = await bcrypt.hash(this.password, 10);
        
        next();
    
   
});
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
    
};

export const User = mongoose.model("User", UserSchema);
