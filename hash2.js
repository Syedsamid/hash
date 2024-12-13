import bcrypt from "bcryptjs";

// $2a$12$uS1hjXZFupLzdfmHj8OG8.R2rh.7lv5iKL3ZlaedQm2vTP4BxGELa

async function verifyPassword(){
    try {
        let  hashValue = "$2a$12$uS1hjXZFupLzdfmHj8OG8.R2rh.7lv5iKL3ZlaedQm2vTP4BxGELa";
        let userPassword = "samidf";
        let verify = await bcrypt.compare(userPassword,hashValue)
        console.log(verify);

        if(verify){
            console.log("login sucessful");
        } else{
            console.log("Fail");
        }
    } catch (error) {
        console.log(error);
    }
}

verifyPassword()