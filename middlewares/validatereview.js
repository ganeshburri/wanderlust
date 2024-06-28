const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../utils/schema.js");

const validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
}

module.exports = validateReview;