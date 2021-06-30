import app from "./app"
import getAllAuction  from "./endpoints/getAllAuction"
import postAuction from "./endpoints/postAuction"
import deleteAllAuction from "./endpoints/deleteAllAuction"
import getOneAuction from "./endpoints/getOneAuction"
import postBid from "./endpoints/postBid"
import getBid from "./endpoints/getBid"
import deleteBid from "./endpoints/deleteBid"


app.get("/auction", getAllAuction)

app.delete("/auction/:id", deleteAllAuction)

app.get("/auction/one/", getOneAuction) 

app.post("/auction/post", postAuction )

app.get("/bid/", getBid)

app.delete("/bid/:id", deleteBid)

app.post("/bid/post", postBid)