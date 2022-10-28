import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a first name!'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name!'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email!'],
        minlength: 3,
        maxlength: 20,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please use a valid email!'
        }
    },
    location: {
        type: String,
        required: [true, 'Please add a location!'],
        minlength: 3,
        maxlength: 20
    },
    password: {
        type: String,
        required: [true, 'Please add a password!'],
        minlength: 3,
        maxlength: 20
    }
})

export default mongoose.model('User', userSchema)