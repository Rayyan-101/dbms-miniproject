const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");


const listingSchema=Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
      default:"https://img.freepik.com/free-photo/cardboard-box_144627-37023.jpg?ga=GA1.1.2049134385.1728642761&semt=ais_hybrid",
       set:(v)=> v==="" ? "https://img.freepik.com/free-photo/cardboard-box_144627-37023.jpg?ga=GA1.1.2049134385.1728642761&semt=ais_hybrid" :v,
    },
    price:{
        type:Number,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
       await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});

const Listing=new mongoose.model("Listing",listingSchema);

module.exports=Listing;