const Vendor = require('../models/Vendor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const vendorRegister = async(req,res) => {
    const {username,email,password} = req.body;
    try{
        const vendorEmail = await Vendor.findOne({email})
        if(vendorEmail){
            return res.status(401).json("Email already taken")
        }
        const hashesdPassword = await bcrypt.hash(password,10)

        const newVendor = new Vendor ({
            username,
            email,
            password:hashesdPassword
        })
        await newVendor.save();
        res.status(201).json({message:"vendor register successfully"})
        console.log("registerd")
    }catch(error){
        res.status(500).json({error:"internal server error"})
        console.log(error)

    }
}
module.exports = {vendorRegister};