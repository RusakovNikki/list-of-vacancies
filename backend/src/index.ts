import express from "express";
import dotenv from "dotenv"
import { vacancyRouter } from "./controllers/vacancy.controller";
import { PrismaClient } from "@prisma/client"
import cors from "cors";

dotenv.config()
const prismaClient = new PrismaClient();
const app = express();

async function main() {
    app.use(express.json());
    app.use(cors());

    app.use('/api', vacancyRouter)

    app.use(function (req, res,) {
        res.status(404);

        res.json({ error: 'Not found' });
    });

    app.listen(process.env.NODE_PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.NODE_PORT || 3000}`);
    })
}

main()
    .then(async () => {
        await prismaClient.$connect();
    })
    .catch(async (error) => {
        console.log(error);
        await prismaClient.$disconnect();
        process.exit(1);
    })