import { Request, Response } from "express";
import { auction } from "../types";
import  connection  from "../connection";

export default async function getAllAuction(
    req: Request,
    res: Response
): Promise<void>{

    try {
        const name = req.query

        const auctions: auction[] = await connection("auction")
        
        res.send(auctions)

    } catch (error) {
        res.status(500).send("Erro")
    }

}