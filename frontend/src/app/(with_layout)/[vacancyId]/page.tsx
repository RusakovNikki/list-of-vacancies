'use server';

import { getVacancy } from '@/actions/server/getVacancy';
import VacancyComponent from '@/components/VacancyComponent';
import VacancyDescription from '@/components/VacancyDescription';
import { notFound } from 'next/navigation';

interface VacancyPage {
    params: Promise<{ vacancyId: string }>;
}

const VacancyPage = async (props: VacancyPage) => {
    const { vacancyId } = await props.params;

    if (!vacancyId || !Number(vacancyId)) {
        return notFound();
    }

    const vacancy = await getVacancy(vacancyId);

    if ('error' in vacancy) throw new Error();

    return (
        <VacancyComponent vacancy={vacancy}>
            <VacancyDescription name={vacancy.name} description={vacancy.description} />
        </VacancyComponent>
    );
};

export default VacancyPage;
