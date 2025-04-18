"use server";

import VacancyComponent from "../VacancyComponent";
import { IVacancy } from "@/schemas/interfaces/vacancy";
import { notFound } from "next/navigation";

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
            return <VacancyComponent key={vacancy.id} vacancy={vacancy} />;
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
