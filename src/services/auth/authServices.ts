import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";
import authRepository from "../../repositories/auth/authRepository";

async function signUp(data: signUpInterface) {
    const { email }: { email: string } = data;

    delete data.confirmedPassword;

    await authRepository.signUp(data);
}

const authServices = {
    signUp
}

export default authServices;