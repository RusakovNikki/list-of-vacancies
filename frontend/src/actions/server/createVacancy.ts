import { IVacancy } from '@/schemas/interfaces/vacancy';

export const createVacancy = async (vacancy: Omit<IVacancy, 'id'>): Promise<IVacancy> => {
    return await fetch(`http://localhost:3001/api/vacancies`, {
        method: 'POST',
        body: JSON.stringify(vacancy),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());
};
