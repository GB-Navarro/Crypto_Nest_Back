import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import prisma from "../../database/prisma";

async function signUp(data: Omit<signUpInterface, "confirmedPassword">) {
    await prisma.users.create({
        data: data
    });
}

async function getUserByEmail(email: string) {
    return await prisma.users.findFirst({
        where: {
            email: email
        }
    })
}

async function getUserPasswordByEmail(email: string) {
    return await prisma.users.findFirst({
        where: {
            email: email
        },
        select: {
            password: true
        }
    })
}

const authRepository = {
    signUp,
    getUserByEmail,
    getUserPasswordByEmail
}

export default authRepository;