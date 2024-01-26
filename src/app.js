import express from "express";
import productsRouter from "./routers/products.router.js";
import cartsRouter from "./routers/carts.router.js";
import ProductManager from "./ProductManager.js";

//-------------------------SERVIDOR------------------------------//
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => console.log("Servidor arriba en el puerto 8080"));

app.use("/api/products", productsRouter);

app.use("/api/carts", cartsRouter);

app.use("/api/products", () => {});
