import express from "express"

const router = express.Router();

router.get("/getusers",(req,res)=>{
    try {
        res.send("users")
    } catch (error) {
        console.log(error);
    }
})

export default router;