import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

function encryptPassword(password: string): string {

    const encryptedPassword = bcrypt.hashSync(password,10);
    
    return encryptedPassword;
}

function comparePasswords(password: string, encryptedPassword: string): void{

    const isEqual = bcrypt.compareSync(password, encryptedPassword);

    if(!(isEqual)){
        throw ({ type: "wrongPassword", message: "Wrong password!" });
    }
}

function generateToken(userEmail: string): string {
    const token = jwt.sign(userEmail, process.env.JWT_KEY,);

    return token;
}

const authUtils = {
    encryptPassword,
    generateToken,
    comparePasswords
}

export default authUtils;