import { IVacancy } from '@scripts/interfaces/vacancy';

export const getVacancy = async (vacancyId: number): Promise<IVacancy> => {
    return await fetch(`http://localhost:3001/api/vacancies/${vacancyId}`).then(res => res.json());
};
