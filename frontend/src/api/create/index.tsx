import { useMutation } from '@tanstack/react-query';

import { IVacancy } from '@scripts/interfaces/vacancy';

const useCreateVacancy = () =>
    useMutation<IVacancy, Error, Omit<IVacancy, 'id'>>({
        mutationFn: async vacancy => {
            const response = await fetch(`/api/vacancies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vacancy),
            });

            if (!response.ok) {
                throw new Error('Failed to create vacancy');
            }

            return response.json();
        },
    });

export default useCreateVacancy;
