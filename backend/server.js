import express from "express";
import { vacationRouter } from "./src/controllers/vacations.controller.js"
import dotenv from "dotenv"

dotenv.config()

const app = express();

async function main() {
    app.use(express.json());

    app.use('/api', vacationRouter)

    app.use(function (req, res,) {
        res.status(404);

        res.json({ error: 'Not found' });
    });

    app.listen(process.env.NODE_PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.NODE_PORT || 3000}`);
    })
}

main()