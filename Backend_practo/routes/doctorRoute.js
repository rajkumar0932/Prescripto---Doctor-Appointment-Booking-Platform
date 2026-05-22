import express from 'express'
import { appointmentCancel, appointmentCompleted, appointmentsDoctor, doctorDashboard, doctorList, doctorProfile, loginDoctor, updateDoctorProfile } from '../controller/doctor.controller.js'
import authDoctor from '../middleware/authDoctor.js'
const doctorRouter= express.Router()

doctorRouter.get('/list', doctorList)

doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor, appointmentsDoctor)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.post('/complete-appointment', authDoctor, appointmentCompleted)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile)

export default doctorRouter
