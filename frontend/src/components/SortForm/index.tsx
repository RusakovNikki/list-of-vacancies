import { Dispatch, SetStateAction } from "react";
import btnDown from "/public/down-btn.svg";
import Image from "next/image";
import { ISortByType } from "../JobList";
import { EVacancyType } from "@/schemas/enums/vacancy";

interface ISortForm {
  sortByType: ISortByType;
  setSortByType: Dispatch<SetStateAction<ISortByType>>;
  setPositionForm: React.Dispatch<React.SetStateAction<boolean>>;
  positionForm: boolean;
}

const EmploymentTypeNameByTypeId: Record<EVacancyType, string> = {
  [EVacancyType.FLEXIBLE]: "Гибкий график",
  [EVacancyType.FULL_DAY]: "Полный день",
  [EVacancyType.REMOTE]: "Удаленная работа",
  [EVacancyType.SHIFT]: "Сменный график"
}

const SortForm = (props: ISortForm) => {
  const { sortByType, setSortByType, setPositionForm, positionForm } = props;
  return (
    <div
      className="sortby__form form-item"
      onClick={() => setPositionForm((prev) => !prev)}
    >
      <label htmlFor="text" className="form-item__title rubik-regular">
        Form
      </label>
      <input
        id="text"
        value={sortByType.employmentType ? EmploymentTypeNameByTypeId[sortByType.employmentType] : ""}
        type="text"
        placeholder="Not selected"
        className="form-item__field rubik-regular"
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
            setSortByType({
              ...sortByType,
              employmentType: event.target.getAttribute("value"),
            })
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

export default SortForm;
