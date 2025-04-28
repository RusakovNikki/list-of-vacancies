import { IVacancy } from '@api/vacancies/types/vacancy';

import VacancyComponent from '@components/VacancyComponent';
import VacancyDescription from '@components/VacancyList/components/VacancyDescription';

interface VacancyPage {
    vacancy: IVacancy;
}

const VacancyPage = (props: VacancyPage) => {
    const { vacancy } = props;

    return (
        <VacancyComponent vacancy={vacancy}>
            <VacancyDescription name={vacancy.name} description={vacancy.description} />
        </VacancyComponent>
    );
};

export default VacancyPage;
