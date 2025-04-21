"use server"

import { redirect } from "next/navigation";
import { TSearchParams } from "../../page";
import CreateVacancyButton from "./components/CreateVacancyButton";

interface ISearchFormProps {
    searchParams?: TSearchParams;
}

const SearchForm = async (props: ISearchFormProps) => {
    const { employmentTypeId, name, page } = props.searchParams || {};

    async function getVacanciesByFilterForm(formData: FormData) {
        "use server";

        const employerType = formData.get("employerType");
        const name = formData.get("name");

        const params = new URLSearchParams();

        if (employerType) params.append('employmentTypeId', employerType.toString());
        if (name) params.append('name', name.toString());
        if (page) params.append('page', `${page}`);

        redirect(`/?${params}`);
    }

    return (
        <form action={getVacanciesByFilterForm} className="header__sortby sortby">
            <div className="header__position form-item">
                <label htmlFor="employerType" className="form-item__title rubik-regular">
                    Поиск по типу занятости
                </label>
                <input
                    id="employerType"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
                    name="employerType"
                    defaultValue={employmentTypeId}
                />
            </div>
            <div className="header__position form-item">
                <label htmlFor="name" className="form-item__title rubik-regular">
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
            <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
                <button type="reset">Сбросить</button>
                <button type="submit">Поиск вакансий</button>
                <CreateVacancyButton />
            </div>
        </form>
    )
}

export default SearchForm
