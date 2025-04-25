import { GetServerSideProps } from 'next';

import { getVacancies } from './api';

export { default } from '@views/index';

export type TSearchParams = {
    employmentTypeName?: string;
    name?: string;
    page?: string;
};

export const getServerSideProps: GetServerSideProps = async context => {
    const searchParams = context.query as TSearchParams;
    const vacancies = await getVacancies(searchParams);

    return {
        props: {
            vacancies,
            searchParams,
        },
    };
};
