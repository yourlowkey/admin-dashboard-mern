import User from "../models/User.js";

export const GetUser =async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    }catch (err) {
        console.log("res---",res.params);
        res.status(404).json({message : err.message})
    }
}