import mongoose from 'mongoose';

const conectdb=()=>{
    try{
        mongoose.connect(process.env.DB_url);
        console.log("Database is connected sucesully")
    }
    catch(err)
    {
     
    }
}

export default conectdb;