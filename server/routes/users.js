const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/backenint")

var userSchema=mongoose.Schema({
    username:String,
    password:String
})

module.exports =mongoose.model('User',userSchema)
