import { Router } from "express";
import { addProduct, getProducts, updateProducts } from "../Controllers/productsControllers.js";
import { sendPrompt } from "../Controllers/geminiControllers.js";
import { authenticate, newUser } from "../Controllers/userControllers.js";
import { addSale , getAllSales , modifySale , removeSale} from "../Controllers/salesControllers.js";
import { addClient, getAllClients, modifyClient, removeClient } from "../Controllers/clientsControllers.js";

const route = Router();

// Products Routes
route.post('/api/v1/add/product', addProduct);
route.get('/api/v1/get/product', getProducts);
route.put('/api/v1/update/product/:id', updateProducts);

// Gemini Routes
route.post('/api/v1/gemini', sendPrompt);

// Auth Routes 
route.post('/api/v1/add/user', newUser);
route.post('/api/v1/auth/user', authenticate);

// Sales Routes
route.post('/api/v1/add/sale', addSale);
route.get('/api/v1/get/sales', getAllSales);
route.put('/api/v1/update/sale/:id', modifySale);
route.delete('/api/v1/delete/sale/:id', removeSale);

// Clients Routes
route.post('/api/v1/add/client', addClient);
route.get('/api/v1/get/clients', getAllClients);
route.put('/api/v1/update/client/:id', modifyClient);
route.delete('/api/v1/delete/client/:id', removeClient);

export default route;
