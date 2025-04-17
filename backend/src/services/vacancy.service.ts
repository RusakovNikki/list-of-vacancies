import { PrismaClient, Vacancy } from "@prisma/client";

export default class VacanciesService {
    private prisma = new PrismaClient();

    async getVacancies(filters?: {
        name?: string;
        employmentTypeId?: string;
        page?: string;
        size?: string;
    }): Promise<Vacancy[] | null> {
        try {
            const page = parseInt(filters?.page || "") || 1;
            const size = parseInt(filters?.size || "") || 5;

            return await this.prisma.vacancy.findMany({
                where: {
                    name: {
                        contains: filters?.name
                    },
                    employmentTypeId: filters?.employmentTypeId,
                },
                take: size,
                skip: page && size ? (page - 1) * size : undefined,
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createVacancy(vacancies: Omit<Vacancy, "id">): Promise<Vacancy | null> {
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