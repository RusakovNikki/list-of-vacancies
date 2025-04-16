import { PrismaClient, Vacancy } from "@prisma/client";

export default class VacanciesService {
    private prisma = new PrismaClient();

    async getVacancies(): Promise<Vacancy[] | undefined> {
        try {
            return await this.prisma.vacancy.findMany();
        } catch (error) {
            console.log(error);
        }
    }

    async createVacancy(vacancies: Vacancy): Promise<Vacancy | undefined> {
        try {
            return await this.prisma.vacancy.create({
                data: vacancies
            })
        } catch (error) {
            console.log(error);
        }
    }
}