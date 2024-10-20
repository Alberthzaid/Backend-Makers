import { Router } from "express";
import { addProduct, getProducts, updateProducts } from "../Controllers/productsControllers.js";
import { sendPrompt } from "../Controllers/geminiControllers.js";


const route = Router();

// Products Routes
route.post('/api/v1/add/product',addProduct);
route.get('/api/v1/get/product' , getProducts)
route.put('/api/v1/update/product/:id' , updateProducts)

// Gemini Routes
route.post('/api/v1/gemini', sendPrompt)


// Sales Routes 


export default route;