import { Request, Response } from "express";
import {  bid, auction} from "../types";
import  connection  from "../connection";

export default async function getBid(
    req: Request,
    res: Response
): Promise<void>{

    try {
       // const nickname = req.query

        //const bids: bid[] = await connection("bid")

        const {id} = req.query

        const bids: bid[]= await connection.raw(`
        SELECT * FROM auction JOIN bid ON auction_id = auction.id WHERE bid.id = ${id}
        `)
         
       // const bids = await connection.select("*").from("auction").where({id})
        
        //.join("bid", "auction_id", "=", "bid.id")
        res.send(bids)

    } catch (error) {
        res.status(500).send("Erro")
    }

}