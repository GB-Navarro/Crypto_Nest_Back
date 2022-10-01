import { news, userNews } from "@prisma/client";

import prisma from "../../database/prisma";

async function getByTittleAndUserId(tittle: string, userId: number) {

    return await prisma.news.findFirst({
        include: {
            userNews: {
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
                    userNews: {
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

    return await prisma.newsCategory.findFirst({
        where: {
            name: name
        },
        select: {
            id: true
        }
    })
}

async function createAndReturn(data: Omit<news, "id" | "date">) {

    const result = await prisma.news.create({
        data: data
    })

    return result
}

async function createRelationship(data: Omit<userNews, "id">) {

    await prisma.userNews.create({
        data: data
    })
}

const newsRepository = {
    getByTittleAndUserId,
    getCategoryIdByName,
    createAndReturn,
    createRelationship
}

export default newsRepository;
