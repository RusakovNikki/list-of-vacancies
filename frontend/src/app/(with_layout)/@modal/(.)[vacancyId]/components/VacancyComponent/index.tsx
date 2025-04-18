"use server";

import { IVacancy } from "@/schemas/interfaces/vacancy";
import preview from "/public/preview_company.svg";
import { notFound } from "next/navigation";
import VacancyDescription from "./components/VacancyDescription";

interface IVacancyComponentV2Props {
    vacancy: IVacancy;
}

const VacancyComponent = (props: IVacancyComponentV2Props) => {
    const { vacancy } = props;

    if (!vacancy) return notFound();

    const {
        name,
        URL,
        areaName,
        employerName,
        employmentTypeName,
        logoURL,
        description
    } = vacancy;

    console.log(vacancy);


    return (
        <div className="jobs-container__item">
            <div className="jobs-container__flex-item">
                <div className="jobs-container__logo-container">
                    <img
                        src={logoURL || preview}
                        alt="логотип компании"
                        className="jobs-container__logo"
                    />
                </div>
                <div className="jobs-container__about about rubik-regular">
                    <p className="about__type">
                        Тип занятости:
                        <span className="about__desc"> {employmentTypeName}</span>
                    </p>
                    <p className="about__type">
                        Компания:
                        <span className="about__desc"> {employerName}</span>
                    </p>
                    <p className="about__type">
                        Ссылка на вакансию:
                        <span className="about__desc">
                            <a href={URL}> {URL}</a>
                        </span>
                    </p>
                    <p className="about__type">
                        Адрес:
                        <span className="about__desc"> {areaName}</span>
                    </p>
                </div>
            </div>
            <VacancyDescription description={description} name={name} />
        </div>
    );
};

export default VacancyComponent;
