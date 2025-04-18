"use server";

import VacancyComponent from "@/components/VacancyComponent";
import { IVacancy } from "@/schemas/interfaces/vacancy";
import { notFound } from "next/navigation";
import MoreDetailsButton from "../MoreDetailsButton";

interface IVacancyListProps {
  vacancies: IVacancy[];
}

const VacancyList = (props: IVacancyListProps) => {
  const { vacancies } = props;

  return (
    <>
      <section className="jobs-container">
        {vacancies.length ? (
          vacancies.map((vacancy) => {
            return <VacancyComponent key={vacancy.id} vacancy={vacancy}>
              <MoreDetailsButton vacancy={vacancy} />
            </VacancyComponent>;
          })
        ) : (
          notFound()
        )}
        {/* 
         * @TODO добавить пагинацию
        */}
      </section>
    </>
  );
};

export default VacancyList;
