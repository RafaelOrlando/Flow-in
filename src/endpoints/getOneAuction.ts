import { Request, Response } from "express";
import { auction } from "../types";
import  connection  from "../connection";

export default async function getOneAuction(
    req: Request,
    res: Response
): Promise<void>{

    try {
        const {title, orderBy, orderType, page} = req.query

        const resultPage = 5

        const offset = resultPage * (Number(page) -1)

        const auctions: auction[] = await connection("auction")
            .where("title", "LIKE", `%${title}%`)
            .orderBy(orderBy as string || "title", orderType as string)
            .offset(offset)
        
        res.send(auctions)

    } catch (error) {
        res.status(500).send("Erro")
    }

}
