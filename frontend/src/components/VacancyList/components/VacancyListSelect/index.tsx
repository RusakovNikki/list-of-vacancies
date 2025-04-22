import { useState } from "react";
import btnDown from "/public/down-btn.svg";
import Image from "next/image";
import { EVacancyType } from "@/schemas/enums/vacancy";
import "./styles.scss";

interface IVacancyListSelect {
  employmentType: EVacancyType | null;
  onChange: (employmentType: EVacancyType) => void;
}

const EmploymentTypeNameByTypeId: Record<EVacancyType, string> = {
  [EVacancyType.FLEXIBLE]: "Гибкий график",
  [EVacancyType.FULL_DAY]: "Полный день",
  [EVacancyType.REMOTE]: "Удаленная работа",
  [EVacancyType.SHIFT]: "Сменный график"
}

const VacancyListSelect = (props: IVacancyListSelect) => {
  const { employmentType, onChange } = props;

  const [positionForm, setPositionForm] = useState(false);

  return (
    <div
      className="sortby__form form-item"
      onClick={() => setPositionForm((prev) => !prev)}
    >
      <label htmlFor="text" className="form-item__title">
        Form
      </label>
      <input
        id="text"
        value={employmentType ? EmploymentTypeNameByTypeId[employmentType] : ""}
        type="text"
        placeholder="Not selected"
        className="form-item__field"
        onChange={() => { }}
      />
      <div
        className={`header__show-btn ${positionForm ? "header__show-btn--rotate" : ""
          }`}
      >
        <Image src={btnDown} alt="" />
      </div>
      {positionForm && (
        <ul
          className="header__ul"
          onClick={(event: any) =>
            onChange(event.target.getAttribute("value"))
          }
        >
          {Object.values(EVacancyType).map(vacancyType => (
            <li key={vacancyType} value={vacancyType}>{EmploymentTypeNameByTypeId[vacancyType]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VacancyListSelect;
