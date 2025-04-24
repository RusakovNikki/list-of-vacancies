'use client';

import { IVacancy } from '@/schemas/interfaces/vacancy';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

const useGetVacancy = (vacancyId: number): UseQueryResult<IVacancy, Error> => {
    return useQuery<IVacancy>({
        queryKey: ['vacancy', vacancyId],
        queryFn: async () => {
            return await fetch(`http://localhost:3001/api/vacancies/${vacancyId}`).then(res => res.json());
        },
    });
};

export default useGetVacancy;
