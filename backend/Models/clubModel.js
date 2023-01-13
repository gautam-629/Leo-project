import mongoose from 'mongoose';
const clubSchema=new mongoose.Schema({
    clubId:{type:String, trim:true, required:true},
    clubName:{type:String, required:true},
    clubEmail:{type:String, required:true},
    totalMember:{type:String, required:true},
    clubType:{type:String, required:true},
    sponsoredClub:{type:String, required:true},
    clubImage:{type:String, required:true},
    marks:{type:String, required:true},
    createdAt: {type: Date, default: Date.now},
},{timestamps:true});

export default mongoose.model('ClubModel',clubSchema,'clubs');