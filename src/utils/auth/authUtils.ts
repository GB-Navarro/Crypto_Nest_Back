import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

function encryptPassword(password: string){

    const encryptPassword = bcrypt.hashSync(password,10);
    
    return encryptPassword;
}

function generateToken(userEmail: string) {
    const token = jwt.sign(userEmail, process.env.JWT_KEY,);

    return token;
}

const authUtils = {
    encryptPassword,
    generateToken
}

export default authUtils;