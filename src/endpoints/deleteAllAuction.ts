import { Request, Response } from "express";
import connection from "../connection";

export default async function deleteAllAuction(
    req: Request,
    res: Response
):Promise<void>{

    try {
       
        const {id} = req.params

        await connection("auction")
            .delete().where({id})

            res.status(202).end()

    } catch (error) {
        res.status(502).send("Erro")
    }

}

