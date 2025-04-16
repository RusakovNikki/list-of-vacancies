import { Router } from "express";
import VacationsService from "../services/vacations.service.js";

const router = Router()

const vacationsService = new VacationsService()

router.get("/vacations", (req, res) => {
    const vacations = vacationsService.getVacations();
    res.status(200).json(vacations);
})

export const vacationRouter = router