import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import prisma from "../../database/prisma";

async function signUp(data: Omit<signUpInterface, "confirmedPassword">){
    await prisma.users.create({
        data:data
    });
}

const authRepository = {
    signUp
}

export default authRepository;