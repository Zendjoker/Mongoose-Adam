const mongoose=require("mongoose");
const {Schema} =mongoose;

const PersonSchema=new Schema({
    name:
    {
        type:String,
        required:true,
    },
    age:Number,
    email:{
        type:String,
        required:true,
        unique:true,
            },
    phone:{
        type:Number,
        required:true,
        unique:true,
            },
    hobby:String,
    favoriteFoods:[String]
});

module.exports=Contact=mongoose.model("person",PersonSchema);