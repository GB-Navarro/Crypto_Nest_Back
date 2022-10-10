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

function generateToken(userId: number, userEmail: string, userName: string): string {
    const data = {
        userId: userId,
        userEmail: userEmail,
        userName: userName
    }

    const config = {
        expiresIn: 60 * 60
    }

    const token = jwt.sign(data, process.env.JWT_KEY, config);

    return token;
}

function filterToken(unfilteredToken: string): string {
    const token = unfilteredToken.replace("Bearer ", "");

    return token;
}

function getTokenDataOrFail(unfilteredToken: string) {

    checkIfIsBearerToken(unfilteredToken);

    const token = filterToken(unfilteredToken);

    try {
        const data = jwt.verify(token, process.env.JWT_KEY);

        return data;
    } catch (error) {
        throw ({ type: "invalidToken", message: "Invalid token!" });
    }

}

function checkIfIsBearerToken(unfilteredToken: string): void {
    //Pode ser feito com Regex
    let aux = "";

    for (let i = 0; i < 7; i++) {
        aux += unfilteredToken[i];
    }

    if (aux != 'Bearer ') {
        throw ({ type: "invalidToken", message: "Invalid token!" });
    }
}

const authUtils = {
    encryptPassword,
    generateToken,
    comparePasswords,
    getTokenDataOrFail,
    filterToken
}

export default authUtils;