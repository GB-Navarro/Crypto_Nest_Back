import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function generateToken(userEmail: string) {

    const token = jwt.sign(userEmail, process.env.JWT_KEY,);

    return token;
}

const authUtils = {
    generateToken
}

export default authUtils;