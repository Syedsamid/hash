import bcrypt from "bcryptjs";

// $2a$10$jI/gsBNKlnBaiM5Wl9XDTOcZocCsnP4dmgPYd3W9y4I9eQjfm5mjW

async function verifyPassword(){
    try {
        let  hashValue = "$2a$10$jI/gsBNKlnBaiM5Wl9XDTOcZocCsnP4dmgPYd3W9y4I9eQjfm5mjW";
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