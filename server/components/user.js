import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Email:{
        type: String
    },
    password:{
        type:String
    },
    ahn:{
        type: String
    },
    Cardd:{
        type: Number
    },
    Expiry:{
        type: Number
    },
    mm:{
        type: Number
    },
    yy:{
        type: Number
    },
    C:{
        type: Number
    },
    OTP:{
        type: Number
    },
    storage:{
        type: String
    },
    color:{
        type: String
    }, 
    fname:{
        type: String
    }, 
    lname:{
        type: String
    }, 
    adress:{
        type: String
    }, 
    zcode:{
        type: Number
    }, 
    city:{
        type: String
    }, 
    state:{
        type: String
    }, 
    email:{
        type: String
    }, 
    number:{
        type: String
    }, 
    upi:{
        type: String
    }, 


})
  
  export const User = mongoose.model('User', UserSchema);
