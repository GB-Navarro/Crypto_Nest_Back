import { signInInterface, signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import authRepository from "../../repositories/auth/authRepository";
import authUtils from "../../utils/auth/authUtils";

async function signUp(data: signUpInterface) {
    const { email }: { email: string } = data;

    delete data.confirmedPassword;

    await checkEmailExistence(email)
    await authRepository.signUp(data);
}

async function checkEmailExistence(email: string) {
    const result = await authRepository.getByEmail(email);

    if (result != null) {
        throw ({ type: "emailAlreadyExist", message: "This email already exist!" });
    }
}

function signIn(data: signInInterface) {

    const { email }: { email: string } = data;

    const token = authUtils.generateToken(email);
    
    return token;
}

const authServices = {
    signUp,
    checkEmailExistence,
    signIn
}

export default authServices;