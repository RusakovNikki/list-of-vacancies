import { IVacancyWrapper } from '@api/types/vacancy';

import { TSearchParams } from '..';

export const getVacancies = async (searchParams?: TSearchParams): Promise<IVacancyWrapper> => {
    const params = new URLSearchParams(searchParams).toString();
    const baseUrl = process.env.API || 'http://localhost:3001';

    return await fetch(`${baseUrl}/api/vacancies/?${params}`).then(res => res.json());
};
