import { Router } from "express";
import VacationsService from "../services/vacations.service";

const router = Router()

const vacationsService = new VacationsService()

router.get("/vacations", async (req, res) => {
    const vacations = await vacationsService.getVacations();
    res.status(200).json(vacations);
})

router.post("/vacations", async (req, res) => {
    const createdVacation = await vacationsService.createVacation(req.body);

    if (!createdVacation) {
        res.status(500).json({ message: "Ошибка при создании вакансии" })
    } else {
        res.status(201).json(createdVacation);
    }
})

export const vacationRouter = router