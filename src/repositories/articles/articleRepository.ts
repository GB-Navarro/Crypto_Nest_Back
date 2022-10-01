import { articles, userArticles } from "@prisma/client";

import prisma from "../../database/prisma";

async function getByTittleAndUserId(tittle: string, userId: number) {

    return await prisma.articles.findFirst({
        include: {
            userArticles: {
                select: {
                    userId: true
                }
            }
        },
        where: {
            AND: [
                {
                    tittle: tittle
                },
                {
                    userArticles: {
                        some: {
                            userId: userId
                        }
                    }
                }
            ]
        }
    })
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

async function createAndReturn(data: Omit<articles, "id" | "date">) {

    const result = await prisma.articles.create({
        data: data
    })

    return result
}

async function createRelationship(data: Omit<userArticles, "id">) {

    await prisma.userArticles.create({
        data: data
    })
}

const articleRepository = {
    getByTittleAndUserId,
    getCategoryIdByName,
    createAndReturn,
    createRelationship
}

export default articleRepository;