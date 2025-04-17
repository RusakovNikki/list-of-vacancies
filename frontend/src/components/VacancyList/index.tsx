"use client";

import { useState } from "react";
import NotFoundComponent from "@/components/NotFoundComponent";
import VacancyListSelect from "./components/VacancyListSelect";
import btnClose from "/public/close-btn.svg";
import Image from "next/image";
import { useGetVacanciesQuery } from "@/store/api/headHunter";
import VacancyComponent from "../VacancyComponent";
import { useDebounce } from "@/hooks/useDebounce";
import VacancyListSearchInput from "./components/VacancyListSearchInput";
import { ISort } from "@/schemas/interfaces/sort";

const PER_PAGE = 5;

const VacancyList = () => {
  const [page, setPage] = useState(1);

  const [sortByType, setSortByType] = useState<ISort>({
    employmentType: null,
    name: null,
  });

  const vacancyName = useDebounce(sortByType.name, 500);

  const { data: vacancies = [] } = useGetVacanciesQuery({
    page: 1,
    size: PER_PAGE * page,
    ...(sortByType.name && { name: vacancyName }),
    ...(sortByType.employmentType && { employmentTypeId: sortByType.employmentType })
  });

  const [positionForm, setPositionForm] = useState(false);

  return (
    <>
      <div className="header__sortby sortby">
        <VacancyListSelect
          sortByType={sortByType}
          setSortByType={setSortByType}
          setPositionForm={setPositionForm}
          positionForm={positionForm}
        />
        <VacancyListSearchInput sortByType={sortByType} setSortByType={setSortByType} />
        <div
          className="header__clear"
          onClick={() =>
            setSortByType({ employmentType: null, name: null })
          }
        >
          <label htmlFor="close" className="header__title-clear formular">
            Clear sorting
          </label>
          <span className="header__close-btn">
            <Image src={btnClose} alt="" id="close" />
          </span>
        </div>
      </div>
      <section className="jobs-container">
        {vacancies.length ? (
          vacancies.map((vacancy) => {
            return <VacancyComponent key={vacancy.id} vacancy={vacancy} />;
          })
        ) : (
          <NotFoundComponent />
        )}
        <button className="button" onClick={() => setPage((prev) => prev + 1)}>
          Смотреть еще...
        </button>
      </section>
    </>
  );
};

export default VacancyList;
