import express from "express"

const router = express.Router();

router.get("/food",(req,res)=>{
    try {
        res.send("food")
    } catch (error) {
        console.log(error);
    }
})

export default router;