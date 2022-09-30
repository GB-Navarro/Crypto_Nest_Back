import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import prisma from "../../database/prisma";

async function signUp(data: Omit<signUpInterface, "confirmedPassword">){
    await prisma.users.create({
        data:data
    });
}

async function getByEmail(email: string){
    return await prisma.users.findFirst({
        where:{
            email:email
        }
    })
}

async function getUserPasswordByEmail(email: string){
    return await prisma.users.findFirst({
        where:{
            email: email
        },
        select:{
            password: true
        }
    })
}

const authRepository = {
    signUp,
    getByEmail,
    getUserPasswordByEmail
}

export default authRepository;