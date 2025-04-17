import { ISort } from "@/schemas/interfaces/sort";
import { Dispatch, SetStateAction } from "react";

interface ISortPosition {
  sortByType: ISort;
  setSortByType: Dispatch<SetStateAction<ISort>>

}

const JobListSearchInput = (props: ISortPosition) => {
  const { sortByType, setSortByType } = props;
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
        value={sortByType.name || ""}
        onChange={(e) => {
          setSortByType((prev) => {
            return {
              ...prev,
              name: e.target.value,
            }
          })
        }}
      />
    </div>
  )
}

export default JobListSearchInput
