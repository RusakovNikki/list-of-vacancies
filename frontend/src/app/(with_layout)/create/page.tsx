"use server";

import { createVacancy } from '@/actions/createVacancy';
import Form from 'next/form';
import { redirect } from 'next/navigation';

const CreateVacationPage = () => {

    async function handleCreateVacation(formData: FormData) {
        "use server"

        const employmentTypeName = formData.get("employerType")?.toString();
        const name = formData.get("name")!.toString();
        const logoURL = formData.get("logoURL")?.toString();
        const URL = formData.get("URL")?.toString();
        const areaName = formData.get("areaName")?.toString();
        const employerName = formData.get("employerName")?.toString();
        const description = formData.get("description")?.toString();

        const result = await createVacancy({ name, areaName, description, employerName, employmentTypeName, logoURL, URL });

        if ("id" in result) redirect("/");
        else throw Error();
    }

    return (
        <Form action={handleCreateVacation}>
            <div className="header__position form-item">
                <label htmlFor="employerType" className="form-item__title rubik-regular">
                    Тип занятости
                </label>
                <input
                    id="employerType"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
                    name="employerType"
                />
            </div>
            <div className="header__position form-item">
                <label htmlFor="name" className="form-item__title rubik-regular">
                    Название вакансии
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
                    name="name"
                    required
                />
            </div>
            <div className="header__position form-item">
                <label htmlFor="logoURL" className="form-item__title rubik-regular">
                    Ссылка на иконку
                </label>
                <input
                    id="logoURL"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
                    name="logoURL"
                />
            </div>
            <div className="header__position form-item">
                <label htmlFor="URL" className="form-item__title rubik-regular">
                    Ссылка на вакансию
                </label>
                <input
                    id="URL"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
                    name="URL"
                />
            </div>
            <div className="header__position form-item">
                <label htmlFor="areaName" className="form-item__title rubik-regular">
                    Адрес
                </label>
                <input
                    id="areaName"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
                    name="areaName"
                />
            </div>
            <div className="header__position form-item">
                <label htmlFor="employerName" className="form-item__title rubik-regular">
                    Название компании
                </label>
                <input
                    id="employerName"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
                    name="employerName"
                />
            </div>
            <div className="header__position form-item">
                <label htmlFor="description" className="form-item__title rubik-regular">
                    Описание
                </label>
                <input
                    id="description"
                    type="text"
                    placeholder="Не указано"
                    className="form-item__field"
                    name="description"
                />
            </div>
            <button className='button' type='submit'>Отправить</button>
        </Form>
    )
}

export default CreateVacationPage
