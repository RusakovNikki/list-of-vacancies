"use client";

import { useRouter } from "next/navigation";
import { IVacancyListProps } from "../..";

interface IPaginationButtonsProps extends IVacancyListProps { }

const PaginationButtons = (props: IPaginationButtonsProps) => {
    const router = useRouter();
    const { searchParams, vacancies } = props;
    const { employmentTypeId, name, page } = searchParams;

    async function handleClickNextPage() {
        const params = new URLSearchParams();

        if (employmentTypeId) params.append('employmentTypeId', encodeURIComponent(employmentTypeId?.toString()));
        if (name) params.append('name', encodeURIComponent(name?.toString()));
        params.append('page', `${page ? parseInt(page) + 1 : 2}`);
        console.log(params.toString());

        router.push(`/?${params}`);
    }

    async function handleClickPrevPage() {
        const params = new URLSearchParams();

        if (employmentTypeId) params.append('employmentTypeId', encodeURIComponent(employmentTypeId?.toString()));
        if (name) params.append('name', encodeURIComponent(name?.toString()));
        params.append('page', `${page ? parseInt(page) - 1 : 1}`);

        router.push(`/?${params}`);
    }

    return (
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
    )
}

export default PaginationButtons
