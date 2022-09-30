import prisma from "../../database/prisma";

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
    getCategoryIdByName
}

export default articleRepository;