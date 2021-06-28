import { Request, Response } from "express";
import connection from "../connection";
//import { bid } from "../types"

export default async function putBid(
    req: Request,
    res: Response
):Promise<void>{

   try {

    const {bid, date} = req.body

    if(req.body.id === "" || req.body.title === ""){
        res.status(400).send("Nenhum campo em branco")
    }
    if(!req.body.id || req.body.title){
        res.status(401).send("Escolha um campo para incluir o lance")
    }
    await connection("auction")
        .insert({bid, date})

        res.status(201).end()
   } catch (error) {
        res.status(501).send("Erro")
   }

}

