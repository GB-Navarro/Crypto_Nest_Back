import { signInInterface, signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";
import { UserInfo } from "../../interfaces/userInterfaces/userInterfaces";

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
    const result = await authRepository.getUserByEmail(email);

    if (result != null) {
        throw ({ type: "emailAlreadyExist", message: "This email already exist!" });
    }
}

async function signIn(data: signInInterface) {
    const { email, password }: { email: string, password: string } = data;

    const id = await getUserIdOrFail(email);

    const { password: encryptedPassword } = await authRepository.getUserPasswordByEmail(email);

    authUtils.comparePasswords(password, encryptedPassword);

    const { name } = await authRepository.getUserNameByEmail(email);

    const token = authUtils.generateToken(id, email, name);

    const response: UserInfo = {
        name: name,
        email: email,
        token: token
    }

    return response;
}

async function getUserIdOrFail(email: string) {
    const result = await authRepository.getUserByEmail(email);

    if (result === null) {
        throw ({ type: "userDoNotExist", message: "This user does not exist!" });
    }

    const { id } = result;

    return id;
}

async function signOut(unfilteredToken: string) {
    const token: string = authUtils.filterToken(unfilteredToken);
}

async function checkIfTokenIsBlocked(unfilteredToken: string) {
    const token: string = authUtils.filterToken(unfilteredToken);

    const result = await authRepository.checkIfTokenIsBlocked(token);

    if (result != null) {
        throw ({ type: "invalidToken", message: "Invalid token!" });
    }
}

const authServices = {
    signUp,
    signIn,
    signOut,
    checkIfTokenIsBlocked
}

export default authServices;