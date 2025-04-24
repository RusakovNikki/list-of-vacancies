import VacancyComponent from '@/components/VacancyComponent';
import { IVacancyWrapper } from '@/schemas/interfaces/vacancy';
import { css } from '@emotion/react';
import { Layout } from '@greensight/gds/emotion';
import { notFound } from 'next/navigation';

import { TSearchParams } from '@views/index';

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
                                  <Layout
                                      type="flex"
                                      direction="column"
                                      justify="space-between"
                                      css={css`
                                          width: 100%;
                                          height: 100%;
                                          margin: 0px;
                                      `}
                                      style={{
                                          margin: '0',
                                      }}
                                  >
                                      <div
                                          css={css`
                                              background: rgb(255, 255, 255);
                                          `}
                                      >
                                          <div
                                              css={css`
                                                  font-size: 32px;
                                                  line-height: 160%; /* or 51px */
                                                  color: #000000;
                                                  font-family: 'Roboto';
                                                  @media (max-width: 450px) {
                                                      font-size: 22px;
                                                      margin-bottom: 16px;
                                                  }
                                              `}
                                          >
                                              {vacancy.name}
                                          </div>
                                      </div>
                                      <div
                                          css={css`
                                              font-size: 16px;
                                              line-height: 140%;
                                              margin-top: 8px;
                                              text-align: center;
                                              color: #a3a6a9;
                                              cursor: pointer;
                                              font-family: 'Roboto';
                                              @media (max-width: 770px) {
                                                  align-self: start;
                                              }
                                              @media (max-width: 450px) {
                                                  align-self: center;
                                              }
                                          `}
                                      >
                                          Подробнее
                                      </div>
                                  </Layout>
                                  <button
                                      className="button button--small"
                                      css={css`
                                          align-self: flex-start;
                                          min-width: 200px;
                                          width: 200px;
                                      `}
                                  >
                                      Удалить
                                  </button>
                                  u
                              </div>
                          </VacancyComponent>
                      );
                  })
                : notFound()}
            <div
                css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                `}
            >
                {/* {page && parseInt(page) > 1 && ( */}
                <button className="button">Предыдущая страница</button>
                {/* )} */}
                {vacancies.count === vacancies.size && <button className="button">Следующая страница</button>}
            </div>
        </section>
    );
};

export default VacancyList;
