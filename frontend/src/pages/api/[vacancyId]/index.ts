import { IVacancy } from '@api/vacancies/types/vacancy';

export const getVacancy = async (vacancyId: number): Promise<IVacancy> => {
    const baseUrl = process.env.NEXT_PUBLIC_API || 'http://localhost:3001';

    return await fetch(`${baseUrl}/api/vacancies/${vacancyId}`).then(res => res.json());
};
