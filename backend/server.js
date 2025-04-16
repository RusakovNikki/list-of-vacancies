import express from "express";
import { vacationRouter } from "./src/controllers/vacations.controller.js"

const app = express();

async function main() {
    app.use(express.json());

    app.use('/api', vacationRouter)

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}

main()