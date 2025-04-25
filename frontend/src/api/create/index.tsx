import { useMutation } from '@tanstack/react-query';

import { useApiClient } from '@api/hooks/useApiClient';
import { IVacancy } from '@api/types/vacancy';

const useCreateVacancy = () => {
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

export default useCreateVacancy;
