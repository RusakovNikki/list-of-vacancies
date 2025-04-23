import { IVacancy } from "@/schemas/interfaces/vacancy";
import PreviewImage from "/public/preview_company.svg";

interface IVacancyComponentV2Props {
  vacancy: IVacancy;
  children: React.ReactNode;
}

const VacancyComponent = (props: IVacancyComponentV2Props) => {
  const { vacancy, children } = props;

  const { URL, areaName, employerName, employmentTypeName, logoURL } = vacancy;

  return (
    <div className="vacancy-component">
      <div className="vacancy-component__flex-item">
        <div className="vacancy-component__logo-container">
          {logoURL ? (
            <img src={logoURL} alt="логотип компании" className="vacancy-component__logo" />
          ) : (
            <PreviewImage className="vacancy-component__logo" />
          )}
        </div>
        <div className="vacancy-component__about rubik-regular">
          <p className="vacancy-component__type">
            Тип занятости:
            <span className="vacancy-component__desc"> {employmentTypeName}</span>
          </p>
          <p className="vacancy-component__type">
            Компания:
            <span className="vacancy-component__desc"> {employerName}</span>
          </p>
          <p className="vacancy-component__type">
            Ссылка на вакансию:
            <span className="vacancy-component__desc">
              <a href={URL}> {URL}</a>
            </span>
          </p>
          <p className="vacancy-component__type">
            Адрес:
            <span className="vacancy-component__desc"> {areaName}</span>
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default VacancyComponent;
