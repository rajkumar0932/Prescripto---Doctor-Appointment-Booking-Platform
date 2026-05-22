import express from 'express'
import { bookAppointment, cancelAppointment, getProfile, listAppointments, loginUser, paymentRazorpay, registerUser, updateProfile, verifyRazorpay } from '../controller/user.controller.js';
import upload from '../middleware/multer.js'
import authUser from '../middleware/authUser.js'

const userRouter= express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile',authUser, getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser, updateProfile)

userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointments)

userRouter.post('/cancel-appointment',authUser,cancelAppointment)
userRouter.post('/payment-razorpay',authUser,paymentRazorpay)
userRouter.post('/verify-razorpay',authUser,verifyRazorpay)

export default userRouter
