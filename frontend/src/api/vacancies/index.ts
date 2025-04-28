import { useMutation } from '@tanstack/react-query';

import { useApiClient } from '@api/hooks/useApiClient';
import { IVacancy } from '@api/vacancies/types/vacancy';

export const useDeleteVacancy = () => {
    const apiClient = useApiClient();

    return useMutation<IVacancy, Error, number>({
        mutationFn: vacancyId => apiClient.delete(`/vacancies/${vacancyId}`),
    });
};

export const useCreateVacancy = () => {
    const apiClient = useApiClient();

    return useMutation<IVacancy, Error, Omit<IVacancy, 'id'>>({
        mutationFn: data => {
            return apiClient.post('vacancies', {
                data,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
        onError: error => {
            throw new Error(error.message);
        },
    });
};
