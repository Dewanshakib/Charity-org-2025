import mongoose, { Schema } from "mongoose";


const membersSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  fatherName:{
    type:String,
    required:true
  },
  motherName:{
    type:String,
    required:true
  },
  birthDate:{
    type:String,
    required:true
  },
  number:{
    type:Number,
    required:true
  },
  className:{
    type:String,
    required:true
  },
  studying:{
    type:String,
    required:true
  }
})

export const members = mongoose.models.members || mongoose.model("members", membersSchema);