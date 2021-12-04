const mongoose=require("mongoose")

const serviceSchema=mongoose.Schema({
    serviceId:String,
    serviceName:String,
    type:[String],
    charge:Number

})
const serviceModel=mongoose.model("Service",serviceSchema,"Service")

module.exports=serviceModel