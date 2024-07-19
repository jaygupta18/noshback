const mongoose=require('mongoose')
const DishSchema=new mongoose.Schema({
   dishid:{
    type:Number,
    required:true,
    unique:true
   },
   dishname:{
    type:String,
    required:true
   },
   imageurl:{
    type:Object,
    required:true
   },
   isPublished:{
      type:Boolean,
      required:true
   }
},
{
    timestamps:true
})
module.exports=mongoose.model('Dish',DishSchema);
