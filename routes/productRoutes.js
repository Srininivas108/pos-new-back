import express from "express";
import { addProductController, deleteProductController, getProductController, updateProductController} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/getproducts", getProductController);

productRouter.post("/addproducts",  addProductController);

productRouter.put("/updateproducts", updateProductController);

 productRouter.post("/deleteproducts", deleteProductController);

export default productRouter;