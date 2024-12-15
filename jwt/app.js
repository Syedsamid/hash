import jwt from "jsonwebtoken";

function encriptData(){
    try {
        
        let userData = {
            fname: "syed",
            lname: "samid",
            age: 20
        }

        let secrectKey = "123455";

        let token = jwt.sign(userData,secrectKey,{
            expiresIn:"1h"
        })
        console.log(token);

    } catch (error) {
        console.log(error);
    }
}
encriptData()