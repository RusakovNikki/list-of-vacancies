import VacancyComponent from '@components/VacancyComponent';
import VacancyDescription from '@components/VacancyList/components/VacancyDescription';

import { IVacancy } from '@scripts/interfaces/vacancy';

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
