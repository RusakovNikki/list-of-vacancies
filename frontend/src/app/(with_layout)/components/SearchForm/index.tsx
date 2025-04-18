"use server"

import Form from "next/form";
import { redirect } from "next/navigation";

const SearchForm = async () => {

    async function getVacanciesByFilterForm(formData: FormData) {
        "use server";

        const employerType = formData.get("employerType");
        const name = formData.get("name");

        let path = "/";
        if (employerType) {
            path += `?employmentTypeId=${encodeURIComponent(employerType.toString())}`;
            if (name) path += `&name=${encodeURIComponent(name.toString())}`;
        } else if (name) {
            path += `?name=${encodeURIComponent(name.toString())}`;
        }

        redirect(path);
    }


    return (
        <Form action={getVacanciesByFilterForm} className="header__sortby sortby">
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
                // value={""}
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
                // value={""}
                />
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
                <button type="reset">Отменить</button>
                <button type="submit">Поиск вакансий</button>
            </div>
        </Form>
    )
}

export default SearchForm
