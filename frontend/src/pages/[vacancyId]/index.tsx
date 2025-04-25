import { GetServerSideProps } from 'next';

import { getVacancy } from '@api/[vacancyId]';

export { default } from '@views/[vacancyId]';

export const getServerSideProps: GetServerSideProps = async context => {
    const { vacancyId } = context.query as { vacancyId: string };

    const vacancy = await getVacancy(parseInt(vacancyId));
    if (!vacancyId || !parseInt(vacancyId) || 'error' in vacancy) {
        return { notFound: true };
    }

    return {
        props: {
            vacancy,
        },
    };
};
