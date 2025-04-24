'use server';

import VacancyComponent from '@/components/VacancyComponent';
import { IVacancyWrapper } from '@/schemas/interfaces/vacancy';
import { notFound } from 'next/navigation';

import { TSearchParams } from '../../page';
import MoreDetailsButton from '../MoreDetailsButton';
import DeleteVacancyButton from './components/DeleteVacancyButton';
import PaginationButtons from './components/PaginationButtons';

export interface IVacancyListProps {
    vacancies: IVacancyWrapper;
    searchParams: TSearchParams;
}

const VacancyList = (props: IVacancyListProps) => {
    const { vacancies, searchParams } = props;

    return (
        <section>
            {vacancies.result.length
                ? vacancies.result.map(vacancy => {
                      return (
                          <VacancyComponent key={vacancy.id} vacancy={vacancy}>
                              <div className="vacancy-list__content">
                                  <MoreDetailsButton vacancy={vacancy} />
                                  <DeleteVacancyButton vacancyId={vacancy.id} />
                              </div>
                          </VacancyComponent>
                      );
                  })
                : notFound()}
            <PaginationButtons searchParams={searchParams} vacancies={vacancies} />
        </section>
    );
};

export default VacancyList;
