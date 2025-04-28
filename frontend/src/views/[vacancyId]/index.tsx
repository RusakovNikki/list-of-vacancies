import { Layout } from '@greensight/gds/emotion';

import { IVacancy } from '@api/vacancies/types/vacancy';

import VacancyComponent from '@components/VacancyComponent';
import VacancyDescription from '@components/VacancyList/components/VacancyDescription';

interface VacancyPage {
    vacancy: IVacancy;
}

const VacancyPage = (props: VacancyPage) => {
    const { vacancy } = props;

    return (
        <Layout type="flex">
            <VacancyComponent vacancy={vacancy}>
                <VacancyDescription name={vacancy.name} description={vacancy.description} />
            </VacancyComponent>
        </Layout>
    );
};

export default VacancyPage;
