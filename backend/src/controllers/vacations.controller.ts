import { Router } from "express";
import VacationsService from "../services/vacations.service";

const router = Router()

const vacationsService = new VacationsService()

router.get("/vacations", async (req, res) => {
    const vacations = await vacationsService.getVacations();
    res.status(200).json(vacations);
})

export const vacationRouter = router