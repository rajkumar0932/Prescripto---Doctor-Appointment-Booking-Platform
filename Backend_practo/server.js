import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

// app config
const app= express();
const port= process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://prescripto-weld-one.vercel.app",
    "https://prescripto-kjdg.vercel.app",
    "https://prescripto-doctor-appointment-booki-alpha.vercel.app",
    "https://practofrontend-eza15fz9p-raj-kumar-guptas-projects.vercel.app",
    "https://practofrontend-rho.vercel.app/",
    "https://prescripto-doctor-appointment-booki-alpha.vercel.app/"
  ],
  credentials: true
}))

// api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get('/', (req,res)=>{
    res.send("API WORKING FINE")
})

app.listen(port, ()=>{
    console.log("Server is running on", port);
})
