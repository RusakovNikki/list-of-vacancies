import { Router } from "express";
import VacancyService from "../services/vacancy.service";

const router = Router()

const vacancyService = new VacancyService()

router.get("/vacancies", async (req, res) => {

    const { name, employmentTypeId, page, size } = req.query as Record<string, string | undefined>;

    const vacancies = await vacancyService.getVacancies({ name, employmentTypeId, page, size });
    if (!vacancies) res.status(500).json({ message: "Ошибка при просмотре вакансий" })
    else res.status(200).json(vacancies);
})

router.post("/vacancies", async (req, res) => {
    const createdVacancy = await vacancyService.createVacancy(req.body);

    if (!createdVacancy) res.status(500).json({ message: "Ошибка при создании вакансии" });
    else res.status(201).json(createdVacancy);

})

router.get("/vacancies/:id", async (req, res) => {
    try {
        const vacancyId = parseInt(req.params.id);
        if (!vacancyId) throw new Error();

        const vacancy = await vacancyService.getVacancy(vacancyId);

        if (!vacancy) {
            res.status(404).json({ error: "Вакансия не найдена" });
        }

        res.status(200).json(vacancy);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ошибка при просмотре вакансии" });
    }
})

router.delete("/vacancies/:id", async (req, res) => {
    try {
        const vacancyId = parseInt(req.params.id);
        if (!vacancyId) throw new Error();

        const vacancy = await vacancyService.deleteVacancy(vacancyId);

        if (!vacancy) {
            res.status(404).json({ error: "Вакансия не найдена" });
        }

        res.status(200).json(vacancy);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ошибка при просмотре вакансии" });
    }
})

export const vacancyRouter = router