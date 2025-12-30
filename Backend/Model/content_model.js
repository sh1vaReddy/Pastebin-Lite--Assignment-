import {model,Schema,Types} from 'mongoose';

const ContentSchema=new Schema({
   content:{
       type:String,
       require:true,
       trim:true,
   },
   expiresAt:{
        type:Date,
        index:{expires:0},
   },
   maxViews:{
       type:Number,
   },
    views:{
        type:Number,
        default:0,
    }
});

export const Content=model.ContentSchema || model('Content',ContentSchema);