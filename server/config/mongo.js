import mongoose from 'mongoose'


const connectDb =  async () => {

    try {
        mongoose.connection.on('connected', ()=>{
            console.log("data connected ")
        })
    
        await mongoose.connect(`${process.env.MONGO_URI}/bg-removal`)
        
    } catch (error) {
        console.log(error)
    }


}

export default connectDb;