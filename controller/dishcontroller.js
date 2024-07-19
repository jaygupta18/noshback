const Dish=require('../models/DishModel')
const getdish=async(req,res)=>{
    try{
       const dish=await Dish.find();
       res.status(200).json(dish);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
} 
const postdish=async(req,res)=>{
  try{
    const {dishid,dishname,imageurl,isPublished}=req.body;
    const dish=await Dish.findOne({dishid});
     
    if(dish){
      return res.status(400).json({message:"dish already exists"});
    }
    const newdish=new Dish({dishid,dishname,imageurl,isPublished});
    await newdish.save();
    res.status(200).json(newdish);
  } 
  catch(err){
    res.status(400).json({message:"error at postdish"})
  };
} 
const togglePublishDish = async (req, res) => {
    try {
      const dishId = req.params.id;
      const dish = await Dish.findById(dishId);
      if (!dish) {
        return res.status(404).json({ message: 'Dish not found' });
      }
      dish.isPublished =!dish.isPublished;
      await dish.save();
    res.status(200).json({ message: 'Dish published status updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports={getdish,togglePublishDish,postdish}
