import { Content } from "../Model/content_model.js";
import mongoose from "mongoose";


export const Checkhealth=async(req,res)=>{
  try
  {
       return res.status(200).json({ok:true})
  }
  catch(err)
  {
    console.error(err);
    res.status(500).json({ok:false});
  }
}

export const CreatePaste = async (req, res) => {

  try {
    const { content, ttl_seconds, max_views } = req.body;

    
    if (!content || typeof content !== "string" || content.trim() === "") {
      return res.status(400).json({ error: "Content is required" });
    }

    
    if (
      ttl_seconds !== undefined &&
      (!Number.isInteger(ttl_seconds) || ttl_seconds < 1)
    ) {
      return res.status(400).json({ error: "Invalid ttl_seconds" });
    }

  
    if (
      max_views !== undefined &&
      (!Number.isInteger(max_views) || max_views < 1)
    ) {
      return res.status(400).json({ error: "Invalid max_views" });
    }

  
    const expiresAt = ttl_seconds
  ? new Date(Date.now() + ttl_seconds * 1000)
  : undefined;

    const data=await Content.create({           
      content,
      expiresAt,
      maxViews: max_views,
    });

    res.status(201).json({
      "id":data._id,
      "url":`${process.env.BASE_URL}/p/${data.id}`
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const GetContent = async (req, res) => {
        console.log(req.params.id);
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid paste ID" });
    }
    const paste = await Content.findById(id);

    if (!paste) {
      return res.status(404).json({ error: "Content not found" });
    }
    
    
    if (paste.expiresAt && new Date() > new Date(paste.expiresAt)) {
      await Content.findByIdAndDelete(id);
      return res.status(410).json({ error: "Content expired" });
    }

    if (paste.maxViews && paste.views >= paste.maxViews) {
      await Content.findByIdAndDelete(id);
      return res.status(410).json({ error: "View limit exceeded" });
    }

   
    paste.views += 1;
    await paste.save();

    return res.status(200).json({
      content: paste.content,
    });

  } catch (err) {
    console.error("GetContent Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
