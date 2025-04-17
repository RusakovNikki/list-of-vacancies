import { ISort } from "@/schemas/interfaces/sort";
import { Dispatch, SetStateAction } from "react";

// interface IVacancyListSearchInput {
//   sortByType: ISort;
//   setSortByType: Dispatch<SetStateAction<ISort>>
// }

interface IVacancyListSearchInput {
  vacancyName: string | null;
  onChange: (value: string) => void;
}

const VacancyListSearchInput = (props: IVacancyListSearchInput) => {
  const { onChange, vacancyName } = props;
  return (
    <div className="header__position form-item">
      <label htmlFor="position" className="form-item__title rubik-regular">
        Position
      </label>
      <input
        id="position"
        type="text"
        placeholder="Unspecified"
        className="form-item__field"
        value={vacancyName || ""}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />
    </div>
  )
}

export default VacancyListSearchInput
