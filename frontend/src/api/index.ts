import { useMutation } from '@tanstack/react-query';
import { TSearchParams } from 'src/pages';

import { IVacancy, IVacancyWrapper } from '@scripts/interfaces/vacancy';

export const getVacancies = async (searchParams?: TSearchParams): Promise<IVacancyWrapper> => {
    const params = new URLSearchParams(searchParams).toString();
    const baseUrl = process.env.API || 'http://localhost:3001';

    return await fetch(`${baseUrl}/api/vacancies/?${params}`).then(res => res.json());
};

export const useDeleteVacancy = () =>
    useMutation<IVacancy, Error, number>({
        mutationFn: async vacancyId => {
            const response = await fetch(`/api/vacancies/${vacancyId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to create vacancy');
            }

            return response.json();
        },
    });
