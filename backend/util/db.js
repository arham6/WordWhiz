import mongoose from 'mongoose';
import env from 'dotenv'

const connectToMongo=async()=>{
     
    try{
        const mongoURL=process.env.DB_URL;
        //console.log(mongoURL)
        await mongoose.connect(mongoURL)
        console.log('db connected successfullyy')
    }
    catch(error){
        console.log('error while connecting db', error.message);
    }
}

export default connectToMongo;