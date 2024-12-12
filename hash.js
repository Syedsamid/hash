import bcrypt from "bcryptjs";

async function hashPassword(){
    try {
        let password = "samidf";
        let hashValue = await bcrypt.hash(password,12);
        console.log(hashValue);

    } catch (error) {
        console.log(error);
    }
}
hashPassword()

// $2a$10$jI/gsBNKlnBaiM5Wl9XDTOcZocCsnP4dmgPYd3W9y4I9eQjfm5mjW

