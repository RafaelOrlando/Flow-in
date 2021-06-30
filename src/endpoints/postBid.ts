import { Request, Response } from "express";
import connection from "../connection";
import { bid } from "../types"

export default async function postBid(
    req: Request,
    res: Response
):Promise<void>{

    try {

        const {id ,bid, dates, auction_id} = req.body
    
        await connection("bid")
            .insert({id , bid, dates, auction_id })
    
            res.status(201).end()
       } catch (error) {
            res.status(501).send({message: error.message})
       }
    
    }