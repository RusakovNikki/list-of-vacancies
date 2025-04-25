import { useMutation } from '@tanstack/react-query';
import { TSearchParams } from 'src/pages';

import { IVacancy, IVacancyWrapper } from '@api/types/vacancy';

import { useApiClient } from './hooks/useApiClient';

export const getVacancies = async (searchParams?: TSearchParams): Promise<IVacancyWrapper> => {
    const params = new URLSearchParams(searchParams).toString();
    const baseUrl = process.env.API || 'http://localhost:3001';

    return await fetch(`${baseUrl}/api/vacancies/?${params}`).then(res => res.json());
};

export const useDeleteVacancy = () => {
    const apiClient = useApiClient();

    return useMutation<IVacancy, Error, number>({
        mutationFn: vacancyId => apiClient.delete(`/vacancies/${vacancyId}`),
    });
};
