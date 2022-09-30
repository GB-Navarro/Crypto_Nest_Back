import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

function encryptPassword(password: string): string {

    const encryptedPassword = bcrypt.hashSync(password, 10);

    return encryptedPassword;
}

function comparePasswords(password: string, encryptedPassword: string): void {

    const isEqual = bcrypt.compareSync(password, encryptedPassword);

    if (!(isEqual)) {
        throw ({ type: "wrongPassword", message: "Wrong password!" });
    }
}

function generateToken(userEmail: string): string {
    const token = jwt.sign(userEmail, process.env.JWT_KEY,);

    return token;
}

function filterToken(unfilteredToken: string): string {

    const token = unfilteredToken.replace("Bearer ", "");

    return token;
}

function getTokenDataOrFail(unfilteredToken: string) {

    const token = filterToken(unfilteredToken);

    try {
        const data = jwt.verify(token, process.env.JWT_KEY);

        return data;
    } catch (error) {
        throw ({ type: "invalidToken", message: "Invalid token!" });
    }

}

const authUtils = {
    encryptPassword,
    generateToken,
    comparePasswords,
    getTokenDataOrFail
}

export default authUtils;