import express from "express"
import userRouter from "./controllers/users/index.js";
import foodRouter from "./controllers/food/index.js";

const app = express();

const PORT = 5009

app.use(express.json());

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg: "hello world"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.use("/apiusers",userRouter);
app.use("/apifood",foodRouter);

app.listen(PORT,()=> {
    console.log(`server is running ${PORT}`);
})