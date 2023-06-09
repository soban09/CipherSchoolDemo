import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
dotenv.config();

const SALT=process.env.salt;

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
    },
    lName:{
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    password: {
        type: String,
        required: true,
    },
    Followers : {
        type : Array
    },
    Web : {
        type : Object
    },
    ProfessionalInfo : {
        type : Array
    },
    Interest : {
        type : Array
    }

});

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, +SALT);
    }
    next();
});

export const User = mongoose.model("User", userSchema);