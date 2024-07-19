const express=require('express'); 
// const { default: mongoose } = require('mongoose');       
const app=express();   
const port =process.env.PORT ; 
const cors = require('cors');

app.use(cors({
  origin: 'https://noshfront-9k86nznmm-jay-kumar-guptas-projects.vercel.app', //frontend port 
  credentials: true
}));

const mongoose=require('mongoose'); 
const bodyParser = require('body-parser');   
app.use(bodyParser.json()); 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dotenv=require('dotenv'); 
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch(err => {
      console.error('Database connection error:', err);
});
app.use('/api',require('./routes/dishroutes'));  
app.get('/',(req,res)=>{
    res.send("hello friends ");
}) 
app.listen(port,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
}) 

