const express = require("express");
const routes = express.Router();

//controller
const provider = require("./controllers/provider");


routes.get("/providers", provider.get);
routes.get("/provider/:id", provider.getById);
routes.post("/provider/add", provider.post);
routes.put("/provider/edit/:id" , provider.put);
routes.delete("/provider/delete/:id", provider.delete);



module.exports = routes;