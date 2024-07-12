const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,

    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    rating:{
        type:Number,
        default:0
    },
   availability:{
    type:String,
    trim:true,
    required:true,
   },
   discount:{
    type:Number,
    default:0
   }
})

let Product=mongoose.model('Product',productSchema)
module.exports=Product