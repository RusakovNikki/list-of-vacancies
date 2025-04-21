"use server";

import VacancyComponent from "@/components/VacancyComponent";
import { IVacancy } from "@/schemas/interfaces/vacancy";
import { notFound, redirect } from "next/navigation";
import MoreDetailsButton from "../MoreDetailsButton";
import { TSearchParams } from "../../page";

interface IVacancyListProps {
  vacancies: IVacancy[];
  searchParams: TSearchParams;
}

const VacancyList = (props: IVacancyListProps) => {
  const { vacancies, searchParams } = props;

  const { page, employmentTypeId, name } = searchParams;

  async function handleClickNextPage() {
    "use server";

    const params = new URLSearchParams();

    if (employmentTypeId) params.append('employmentTypeId', encodeURIComponent(employmentTypeId.toString()));
    if (name) params.append('name', encodeURIComponent(name.toString()));
    params.append('page', `${page ? parseInt(page) + 1 : 2}`);

    redirect(`/?${params}`);
  }

  async function handleClickPrevPage() {
    "use server";

    const params = new URLSearchParams();

    if (employmentTypeId) params.append('employmentTypeId', encodeURIComponent(employmentTypeId.toString()));
    if (name) params.append('name', encodeURIComponent(name.toString()));
    params.append('page', `${page ? parseInt(page) - 1 : 1}`);

    redirect(`/?${params}`);
  }

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
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", }}>
          {page && parseInt(page) > 1 &&
            <button className="button" onClick={handleClickPrevPage}>
              Предыдущая страница
            </button>
          }

          <button className="button" onClick={handleClickNextPage}>
            Следующая страница
          </button>
        </div>
      </section>
    </>
  );
};

export default VacancyList;
