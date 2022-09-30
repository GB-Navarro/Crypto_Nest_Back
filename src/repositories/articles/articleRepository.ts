import prisma from "../../database/prisma";
import { articles } from "@prisma/client";
 

async function create(data: Omit<articles,"id" | "date">){
    await prisma.articles.create({
        data: data
    })
}

async function getCategoryIdByName(name: string){
    return await prisma.articlesCategory.findFirst({
        where:{
            name: name
        },
        select:{
            id: true
        }
    })
}

const articleRepository = {
    create,
    getCategoryIdByName
}

export default articleRepository;