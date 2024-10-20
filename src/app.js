import express, { json } from "express";
import route from "./Routes/Routes.js";
import cors from 'cors';



const app = express();
app.use(cors())
app.use(json())
app.use(route)

export {app};