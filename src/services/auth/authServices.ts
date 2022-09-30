import { signInInterface, signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import authRepository from "../../repositories/auth/authRepository";
import authUtils from "../../utils/auth/authUtils";

async function signUp(data: signUpInterface) {
    const { email, password }: { email: string, password: string } = data;

    delete data.confirmedPassword;

    await checkEmailExistence(email)

    data.password = authUtils.encryptPassword(password);
    
    await authRepository.signUp(data);
}

async function checkEmailExistence(email: string) {
    const result = await authRepository.getByEmail(email);

    if (result != null) {
        throw ({ type: "emailAlreadyExist", message: "This email already exist!" });
    }
}

async function signIn(data: signInInterface) {

    const { email }: { email: string } = data;

    const token = authUtils.generateToken(email);
    
    return token;
}

async function checkUserExistence(email: string) {
    const result = await authRepository.getByEmail(email);

    if (result === null) {
        throw ({ type: "userDoNotExist", message: "This user does not exist!" });
    }
}

const authServices = {
    signUp,
    checkEmailExistence,
    signIn,
    checkUserExistence
}

export default authServices;