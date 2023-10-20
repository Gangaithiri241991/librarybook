import express from "express"

import { bookRouter } from "./Router/book.js";

import cors from "cors"


//confgure the environment

const PORT = 2025
//initiating server
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//studers routers
app.use("/students",bookRouter)


//app.use("/users",userRouter )
//starting ther server
app.listen(PORT, ()=>console.log("server running in localhost:2025")) 
