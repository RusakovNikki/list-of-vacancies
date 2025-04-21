"use server";

import VacancyComponent from "@/components/VacancyComponent";
import { IVacancy, IVacancyWrapper } from "@/schemas/interfaces/vacancy";
import { notFound, redirect } from "next/navigation";
import MoreDetailsButton from "../MoreDetailsButton";
import { TSearchParams } from "../../page";
import { deleteVacancy } from "@/actions/deleteVacancy";
import DeleteVacancyButton from "./components/DeleteVacancyButton";

interface IVacancyListProps {
  vacancies: IVacancyWrapper;
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
        {vacancies.result.length ? (
          vacancies.result.map((vacancy) => {
            return <VacancyComponent key={vacancy.id} vacancy={vacancy}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <MoreDetailsButton vacancy={vacancy} />
                <DeleteVacancyButton vacancyId={vacancy.id} />
              </div>
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
          {vacancies.count === vacancies.size &&
            <button className="button" onClick={handleClickNextPage}>
              Следующая страница
            </button>
          }

        </div>
      </section>
    </>
  );
};

export default VacancyList;
