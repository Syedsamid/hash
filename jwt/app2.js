import jwt from "jsonwebtoken";

function decryptData(){
    try{
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6InN5ZWQiLCJsbmFtZSI6InNhbWlkIiwiYWdlIjoyMCwiaWF0IjoxNzM0MjM4OTgwLCJleHAiOjE3MzQyNDI1ODB9._Ei2fTxXKLu6D3y6TCxin4BOJkBApapljhlEduuwVTY";
        let secreatKey = "123455";

        let userData = jwt.verify(token,secreatKey);
        console.log(userData);
    } catch (error){
        console.log(error);
    }
}

decryptData()