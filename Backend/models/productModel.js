const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter Product description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxLength:[8,"Price cannot exceed 8 digits"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true,"Please Enter Produxt Category"]
    },
    stock:{
        type:Number,
        required:[true,"No Stock"],
        maxLength:[4,"Not valid number of Stock"],
        default:1
    },
    noOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now

    }
})

module.exports=mongoose.model("Product",productSchema)