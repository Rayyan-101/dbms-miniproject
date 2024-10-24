const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const listingController=require("../controllers/listings.js");
const {validateListing}=require("../middleware.js");


router
.route("/")
.get(wrapAsync(listingController.index))
.post(validateListing,wrapAsync(listingController.createListing));

router.get("/new",listingController.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(validateListing,wrapAsync(listingController.updateListing))
.delete(wrapAsync(listingController.destroyListing));


router.get("/:id/edit",wrapAsync(listingController.renderEditForm));

module.exports=router;