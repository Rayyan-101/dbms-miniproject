const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const reviewController=require("../controllers/reviews.js");
const {validateReview}=require("../middleware.js");

router.post("/",validateReview,wrapAsync(reviewController.createReview));

router.delete("/:reviewId",wrapAsync(reviewController.destroyReview));

module.exports=router;
