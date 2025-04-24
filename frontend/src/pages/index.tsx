import { getVacancies } from '@/actions/server/getVacancies';
import { GetServerSideProps } from 'next';

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
