import "dotenv/config.js";
import express from "express";
import cors from "cors";
// import { Router } from "express"
import route from "./routes/index.js";
const app = express();
const port = process.env.PORT;
// const router = Router()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//     router.get('/', (req, res, next)=>{
//         res.json({message:"hello"})
//     })
// )
app.use(route);
app.listen(port, () => {
  console.log(`Server Listening ${port}`);
  console.log(`http://localhost:${port}/`);
});
