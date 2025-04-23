"use client";

import useSearchStore from "@/store";
import { TSearchParams } from "../../page";
import CreateVacancyButton from "./components/CreateVacancyButton";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ISearchFormProps {
  searchParams?: TSearchParams;
}

const SearchForm = (props: ISearchFormProps) => {
  const {
    employmentTypeName: employmentTypeNameParam,
    name: nameParam,
    page,
  } = props.searchParams || {};

  const { employmentTypeName, name, setField } = useSearchStore((state) => state);
  const router = useRouter();

  useEffect(() => {
    setField(employmentTypeNameParam || "", "employmentTypeName");
    setField(nameParam || "", "name");
  }, [employmentTypeNameParam, nameParam, setField]);

  function getVacanciesByFilterForm(formData: FormData) {
    const employerType = formData.get("employerType");
    const name = formData.get("name");
    const params = new URLSearchParams();
    if (employerType) params.append("employmentTypeName", employerType.toString());
    if (name) params.append("name", name.toString());
    if (page) params.append("page", `${page}`);
    router.push(`/?${params}`);
  }

  return (
    <form action={getVacanciesByFilterForm} className="vacancy-list__filter-form">
      <div className="form-item">
        <label htmlFor="employerType" className="form-item__title">
          Поиск по типу занятости
        </label>
        <input
          id="employerType"
          type="text"
          placeholder="Не указано"
          className="form-item__field"
          name="employerType"
          value={employmentTypeName}
          onChange={(e) => setField(e.target.value, "employmentTypeName")}
        />
      </div>
      <div className="form-item">
        <label htmlFor="name" className="form-item__title">
          Поиск по названию
        </label>
        <input
          id="name"
          type="text"
          placeholder="Не указано"
          className="form-item__field"
          name="name"
          value={name}
          onChange={(e) => setField(e.target.value, "name")}
        />
      </div>
      <div className="vacancy-list__buttons">
        <button
          className="button button--small"
          onClick={() => {
            setField("", "employmentTypeName");
            setField("", "name");
          }}
        >
          Сбросить
        </button>
        <button type="submit" className="button button--small">
          Поиск вакансий
        </button>
        <CreateVacancyButton />
      </div>
    </form>
  );
};

export default SearchForm;
