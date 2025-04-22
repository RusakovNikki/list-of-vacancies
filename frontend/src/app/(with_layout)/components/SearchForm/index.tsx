"use server"

import { redirect } from "next/navigation";
import { TSearchParams } from "../../page";
import CreateVacancyButton from "./components/CreateVacancyButton";

interface ISearchFormProps {
    searchParams?: TSearchParams;
}

const SearchForm = async (props: ISearchFormProps) => {
    const { employmentTypeName, name, page } = props.searchParams || {};

    async function getVacanciesByFilterForm(formData: FormData) {
        "use server";

        const employerType = formData.get("employerType");
        const name = formData.get("name");

        const params = new URLSearchParams();

        if (employerType) params.append('employmentTypeName', employerType.toString());
        if (name) params.append('name', name.toString());
        if (page) params.append('page', `${page}`);

        redirect(`/?${params}`);
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
                    defaultValue={employmentTypeName}
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
                    defaultValue={name}
                />
            </div>
            <div className="vacancy-list__buttons">
                <button type="reset" className="button button--small">Сбросить</button>
                <button type="submit" className="button button--small">Поиск вакансий</button>
                <CreateVacancyButton />
            </div>
        </form>
    )
}

export default SearchForm
