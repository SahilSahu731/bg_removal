import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDb from './config/mongo.js'


// app config
const PORT = process.env.PORT || 4000
const app = express()

// init middlewares
app.use(express.json())
app.use(cors())
await connectDb()

//api orutes 
app.get('/', (req,res)=> {
    res.send("Api working")
})

app.listen(PORT, ()=>{
    console.log("server Started on port", PORT)
})

