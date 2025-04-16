import { PrismaClient, Vacation } from "@prisma/client";

export default class VacationsService {
    private prisma = new PrismaClient();

    async getVacations(): Promise<Vacation[] | undefined> {
        try {
            return await this.prisma.vacation.findMany();
        } catch (error) {
            console.log(error);
        }
    }

    async createVacation(vacation: Vacation): Promise<Vacation | undefined> {
        try {
            return await this.prisma.vacation.create({
                data: vacation
            })
        } catch (error) {
            console.log(error);
        }
    }
}