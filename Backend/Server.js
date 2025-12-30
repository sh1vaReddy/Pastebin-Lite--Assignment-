import express from 'express';
import dontenv from 'dotenv';
import conectDB from './config/DB.js';
import pasterouter from './routes/Content_router.js';
import cors from 'cors'



dontenv.config();
conectDB();

const app=express();
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);


app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});
app.use('/api',pasterouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})