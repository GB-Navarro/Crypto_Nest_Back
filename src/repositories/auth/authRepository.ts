import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";
import { tokenBlocklist } from "@prisma/client";
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

async function addTokenToTheBlockList(token: string) {
    return await prisma.tokenBlocklist.create({
        data: {
            token: token
        }
    })
}

async function checkIfTokenIsBlocked(token: string) {
    return await prisma.tokenBlocklist.findFirst({
        where:{
            token: token
        }
    })
}
const authRepository = {
    signUp,
    getUserByEmail,
    getUserPasswordByEmail,
    getUserNameByEmail,
    addTokenToTheBlockList,
    checkIfTokenIsBlocked
}

export default authRepository;