import { PrismaClient, Vacancy } from "@prisma/client";

export default class VacanciesService {
    private prisma = new PrismaClient();

    async getVacancies(): Promise<Vacancy[] | null> {
        try {
            return await this.prisma.vacancy.findMany();
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createVacancy(vacancies: Vacancy): Promise<Vacancy | null> {
        try {
            return await this.prisma.vacancy.create({
                data: vacancies
            })
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getVacancy(vacancyId: number): Promise<Vacancy | null> {
        try {
            return await this.prisma.vacancy.findUnique({
                where: { id: vacancyId }
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}