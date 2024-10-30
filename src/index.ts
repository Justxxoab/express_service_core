import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import helmet from "helmet"
import todoRouter from "./routes/todo.router"

dotenv.config()

const app: Express = express()
const port = process.env.PORT

mongoose.connect(process.env.MONGODB_CONNECTION as string).then(() => {
    console.log("connected to MongoDB")
})

app.post('/', (_req: Request, res: Response) => { 
    res.send('Welcome to the RESTful API!'); 
}); 

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use("/api", todoRouter)

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})