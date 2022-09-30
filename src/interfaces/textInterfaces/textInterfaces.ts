import { articles, news } from "@prisma/client";

export type textInterface = {
    type: string,
    tittle: string,
    text: string,
    categoryId: string
}