const mongoose = require('mongoose')
const vendorschema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const Vendor = mongoose.model("Vendor",vendorschema);
module.exports = Vendor;