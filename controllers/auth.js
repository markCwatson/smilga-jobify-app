import User from '../models/user.js'
import asyncHandler from '../middleware/async.js'
import ErrorResponse from '../utils/errorResponse.js'

// @desc    Register a new user.
// @route   POST /api/v1/auth/register
// @access  Public
const register = asyncHandler(async (req, res, next) => {
    const checkUser = await User.find({ email: req.body.email })

    if (checkUser.length > 0) {
        return next(new ErrorResponse('Email already in use!', 409))
    }
    
    const user = await User.create(req.body)

    if (!user) {
        return next(new ErrorResponse('User not created!', 400))
    }

    res.status(201).json({
        success: true,
        data: user
    })
})

// @desc    Login user.
// @route   POST /api/v1/auth/login
// @access  Public
const login = async (req, res) => {
    res.send('login user')
}

// @desc    Update user.
// @route   PUT /api/v1/auth/update
// @access  Private
const updateUser = async (req, res) => {
    res.send('update user')
}

export { register, login, updateUser }