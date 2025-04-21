import { PrismaClient, Vacancy } from "@prisma/client";

export default class VacanciesService {
    private prisma = new PrismaClient();

    async getVacancies(filters?: {
        name?: string;
        employmentTypeId?: string;
        page?: string;
        size?: string;
    }): Promise<{
        result: Omit<Vacancy, "description">[],
        page: number;
        size: number;
        count: number;
    } | null> {
        try {
            const page = parseInt(filters?.page || "") || 1;
            const size = parseInt(filters?.size || "") || 5;

            const result = (await this.prisma.vacancy.findMany({
                where: {
                    name: {
                        contains: filters?.name
                    },
                    employmentTypeId: filters?.employmentTypeId,
                },
                select: {
                    id: true,
                    name: true,
                    URL: true,
                    areaName: true,
                    employerName: true,
                    employmentTypeId: true,
                    employmentTypeName: true,
                    description: false,
                    logoURL:
                        true,
                },
                take: size,
                skip: page && size ? (page - 1) * size : undefined,
            }));

            return {
                result,
                page,
                size,
                count: result.length
            }
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