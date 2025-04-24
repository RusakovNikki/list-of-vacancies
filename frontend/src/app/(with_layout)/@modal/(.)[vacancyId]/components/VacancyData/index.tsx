'use client';

import useGetVacancy from '@/actions/client/useGetVacancy';
import NotFoundPage from '@/app/not-found';
import VacancyComponent from '@/components/VacancyComponent';
import VacancyDescription from '@/components/VacancyDescription';

interface IVacancyDataProps {
    vacancyId: string;
}

const VacancyData = (props: IVacancyDataProps) => {
    const { vacancyId } = props;

    const { data: vacancy } = useGetVacancy(parseInt(vacancyId));

    console.log(vacancy);

    return vacancy ? (
        <VacancyComponent vacancy={vacancy}>
            <VacancyDescription name={vacancy.name} description={vacancy.description} />
        </VacancyComponent>
    ) : (
        <NotFoundPage />
    );
    return <></>;
};

export default VacancyData;
