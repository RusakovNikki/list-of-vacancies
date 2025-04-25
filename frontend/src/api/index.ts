import { useMutation } from '@tanstack/react-query';

import { IVacancy } from '@api/types/vacancy';

import { useApiClient } from './hooks/useApiClient';

export const useDeleteVacancy = () => {
    const apiClient = useApiClient();

    return useMutation<IVacancy, Error, number>({
        mutationFn: vacancyId => apiClient.delete(`/vacancies/${vacancyId}`),
    });
};
