import express, { json } from "express";
import route from "./Routes/Routes.js";



const app = express();
app.use(cors())
app.use(route)

export {app};