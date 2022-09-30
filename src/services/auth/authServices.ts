import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import authRepository from "../../repositories/auth/authRepository";

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

const authServices = {
    signUp,
    checkEmailExistence
}

export default authServices;