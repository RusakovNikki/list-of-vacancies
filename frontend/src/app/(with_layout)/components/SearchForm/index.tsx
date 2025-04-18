"use server"

import Form from "next/form";

const SearchForm = () => {
    return (
        <Form action="/" className="header__sortby sortby">
            <div className="header__position form-item">
                <label htmlFor="employerType" className="form-item__title rubik-regular">
                    Поиск по типу занятости
                </label>
                <input
                    id="employerType"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
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
