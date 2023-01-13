import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    name:{type:String, trim:true, required:true},
    club_id:{type:mongoose.Schema.Types.ObjectId,ref:'ClubModel'},
    clubId:{type:String,required:true},
    email:{type:String, required:true},
    password:{type:String,required:true},
    membershipNumber:{type:String,required:true},
    avatar:{type:String,required:true},
    role:{type:String, default:'user'},
    bloodGroup:{type:String,required:true},
    bloodGroup:{type:Profession,required:true},
    post:{type:String,required:true},
    address:{type:String,required:true},
    contact:{type:String,required:true},
    gender:{type:String,required:true},
    joinDate:{type:Date,required:true},
    createdAt: {type: Date, default: Date.now},
},{timestamps:true});

export default mongoose.model('UserModel',userSchema,'users');