const mongoose=require("mongoose")
const express=require("express")
const router=express.Router();
router.use(express.json())

const serviceModel=require("./Models/serviceModel.js")

router.get("/",async(req,res)=>{
   return  res.json({data: "Service Details"})
})
//display Service 
router.get("/list",async(req,res)=>{
    const serviceData =await serviceModel.find();
    return res.json({data:serviceData})
})
//add Service
router.post("/addService",async(req,res)=>{
    const newService= req.body;
  const serviceData=  await serviceModel.create(newService);
   return res.json({ msg :"Service added successfully",data:serviceData});
});

//delete Service
router.delete("/deleteService/:id",async(req,res)=>{
    const serviceId= req.params.id;
     const  deletedService =await serviceModel.findOneAndDelete({serviceId : serviceId});
     res.json({status:"Service Deleted Successfully",data:deletedService})
    });


// update Service 
router.put("/updateService/:id",async(req,res)=>{
    const serviceId=req.params.id;
    const serviceName=req.body.serviceName;
    const type=req.body.type;
    const charge=req.body.charge;
    const updatedData= await serviceModel.findOneAndUpdate(
        {serviceId:serviceId},
        {serviceName:serviceName,
         type:type,
         charge:charge},
        {new:true}
        );
   return  res.json({msg:"Service Updated Successfully",data:updatedData})

});

module.exports = router;