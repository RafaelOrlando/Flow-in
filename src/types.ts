export type auction = {
    id: string,
    title: string,
    initial: number,
    expiration: string,
   
   
}

export type bid = {
   id: string,
   bid : number,
   dates: number,
   auction_id: string
}




