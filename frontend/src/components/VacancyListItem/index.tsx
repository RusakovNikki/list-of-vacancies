"use client";

import Parser from "html-react-parser";
import { IVacancy } from "@/schemas/interfaces/vacancy";
import preview from "/public/preview_company.svg";
import { useState } from "react";
import { useGetVacancyQuery } from "@/store/api/headHunter";
import { notFound, useRouter } from "next/navigation";

interface IJobBlockWithVacancyProps {
  vacancy: IVacancy;
  vacancyId?: never;
}

interface IJobBlockWithVacancyIdProps {
  vacancyId: number;
  vacancy?: never;
}

type TJobBlockProps = IJobBlockWithVacancyProps | IJobBlockWithVacancyIdProps;

const VacancyListItem = (props: TJobBlockProps) => {
  const { vacancy, vacancyId } = props;

  const { data: vacancyRequestData, isLoading } = useGetVacancyQuery(
    vacancyId!,
    {
      skip: !vacancyId && Boolean(vacancy),
    }
  );

  const vacancyData = vacancy || vacancyRequestData;

  if (!vacancyData && !isLoading) return notFound();

  const [showMoreDesc, setShowMoreDesc] = useState(true);

  const { name, description, id, URL, areaName, employerName, employmentTypeId, employmentTypeName, logoURL } =
    vacancyData || {};

  const router = useRouter();

  return (
    <>
      {vacancyData && (
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
                Form:
                <span className="about__desc"> {employmentTypeName}</span>
              </p>

              <p className="about__type">
                Company:
                <span className="about__desc"> {employerName}</span>
              </p>

              <p className="about__type">
                Web:
                <span className="about__desc">
                  <a href={URL}>{URL}</a>
                </span>
              </p>

              <p className="about__type">
                Address:
                <span className="about__desc"> {areaName}</span>
              </p>
            </div>
          </div>
          <div className="jobs-container__flex-item">
            <div className="jobs-container__desc">
              <div className="jobs-container__title roboto">{name}</div>
              <div
                className={`jobs-container__specifics ${showMoreDesc ? "jobs-container__specifics--height" : ""
                  } roboto`}
              >
                {Parser(String(description || ""))}
              </div>
            </div>
            <div
              className="jobs-container__more-btn roboto"
              onClick={() => {
                if (vacancyRequestData && !vacancy) {
                  setShowMoreDesc((prev) => !prev);
                } else if (vacancy?.id) {
                  router.push(vacancy.id.toString());
                }
              }}
            >
              {showMoreDesc ? `more details` : "close"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VacancyListItem;
