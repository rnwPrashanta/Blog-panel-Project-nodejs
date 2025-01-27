const { default: mongoose } = require("mongoose");

exports.dbconnect=()=>{
    mongoose.connect("mongodb+srv://rnw:FinalPass123@cluster0.5yybt.mongodb.net/admin-panel")
.then(()=>{
    console.log("db connected");
 }).catch((error)=>{
    console.log(error);
 })
}