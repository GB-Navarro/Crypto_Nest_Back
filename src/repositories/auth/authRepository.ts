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

async function getUserNameByEmail(email: string) {
    return await prisma.users.findFirst({
        where: {
            email: email
        },
        select: {
            name: true
        }
    })
}

const authRepository = {
    signUp,
    getUserByEmail,
    getUserPasswordByEmail,
    getUserNameByEmail
}

export default authRepository;