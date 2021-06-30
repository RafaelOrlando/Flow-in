import { Request, Response } from "express";
import connection from "../connection";

export default async function deleteBid(
    req: Request,
    res: Response
):Promise<void>{

    try {
       
        const {id} = req.params

        await connection("bid")
            .delete().where({id})

            res.status(202).end()

    } catch (error) {
        res.status(502).send("Deu ruim")
    }

}

