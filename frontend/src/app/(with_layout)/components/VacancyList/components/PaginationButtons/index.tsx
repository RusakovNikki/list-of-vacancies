"use client";

import { useRouter } from "next/navigation";
import { IVacancyListProps } from "../..";
import { css } from "@emotion/react";

type IPaginationButtonsProps = IVacancyListProps;

const PaginationButtons = (props: IPaginationButtonsProps) => {
  const router = useRouter();
  const { searchParams, vacancies } = props;
  const { employmentTypeName, name, page } = searchParams;

  async function handleClickNextPage() {
    const params = new URLSearchParams();

    if (employmentTypeName)
      params.append("employmentTypeName", encodeURIComponent(employmentTypeName?.toString()));
    if (name) params.append("name", encodeURIComponent(name?.toString()));
    params.append("page", `${page ? parseInt(page) + 1 : 2}`);

    router.push(`/?${params}`);
  }

  async function handleClickPrevPage() {
    const params = new URLSearchParams();

    if (employmentTypeName)
      params.append("employmentTypeName", encodeURIComponent(employmentTypeName?.toString()));
    if (name) params.append("name", encodeURIComponent(name?.toString()));
    params.append("page", `${page ? parseInt(page) - 1 : 1}`);

    router.push(`/?${params}`);
  }

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        justify-content: space-between;
      `}
    >
      {page && parseInt(page) > 1 && (
        <button className="button" onClick={handleClickPrevPage}>
          Предыдущая страница
        </button>
      )}
      {vacancies.count === vacancies.size && (
        <button className="button" onClick={handleClickNextPage}>
          Следующая страница
        </button>
      )}
    </div>
  );
};

export default PaginationButtons;
