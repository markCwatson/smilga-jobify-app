import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from 'bcryptjs'

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
        minlength: 6,
        maxlength: 20
    }
})

// Middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)

    next()
})

export default mongoose.model('User', userSchema)