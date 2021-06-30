import { Request, Response } from "express";
import connection from "../connection";
import { auction } from "../types";

export default async function postAuction(
    req: Request,
    res: Response
):Promise<void>{

   try {


    const {id , title, initial, expiration,} = req.body

    await connection("auction")
        .insert({id , title, initial, expiration,})

        
        res.status(201).end()


   } catch (error) {
        res.status(501).send({message: error.message})
   }

}
