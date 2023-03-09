// it is used for creating the connection of notesdatabase which will store the title and content of the NOTE WITH user_id which will be different for different users

require('dotenv').config();
const mongoose =require("mongoose");
const con1=mongoose.createConnection(process.env.NoteDatabase );
module.exports=con1;