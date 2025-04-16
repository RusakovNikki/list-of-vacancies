import { PrismaClient, Vacation } from "@prisma/client";

export default class VacationsService {
    private prisma = new PrismaClient();

    async getVacations(): Promise<Vacation[]> {
        return this.prisma.vacation.findMany();
    }
}