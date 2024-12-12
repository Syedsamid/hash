import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    try {
        res.status(200).send("boys")
    } catch (error) {
        console.log(error);
        res.status(500).json({mes: error});
    }
});

export default router;