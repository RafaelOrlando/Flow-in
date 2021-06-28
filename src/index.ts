import app from "./app"
import getAllAuction  from "./endpoints/getAllAuction"
import postAuction from "./endpoints/postAuction"
import deleteAllAuction from "./endpoints/deleteAllAuction"
import getOneAuction from "./endpoints/getOneAuction"
import putBid from "./endpoints/putBid"


app.get("/auction", getAllAuction)

app.delete("/auction/:id", deleteAllAuction)

app.get("/auction/one/", getOneAuction) 

app.post("/auction/post", postAuction )

app.put("/auction/put/:id", putBid)