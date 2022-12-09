import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connection } from "./database/dbconfig.js";
import routes from "./routes/todo-routes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/", routes);

connection();
const PORT = process.env.SERVER_PORT ?? 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
