import { articles } from "@prisma/client";

import prisma from "../../database/prisma";

async function getByTittle(tittle: string) {
    return await prisma.articles.findFirst({
        where: {
            tittle: tittle
        }
    })
}

async function createAndReturn(data: Omit<articles, "id" | "date">) {
    const result = await prisma.articles.create({
        data: data
    })

    return result
}

async function getCategoryIdByName(name: string) {
    return await prisma.articlesCategory.findFirst({
        where: {
            name: name
        },
        select: {
            id: true
        }
    })
}

const articleRepository = {
    createAndReturn,
    getCategoryIdByName,
    getByTittle
}

export default articleRepository;