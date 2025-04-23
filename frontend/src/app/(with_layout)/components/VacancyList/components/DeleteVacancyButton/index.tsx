"use client";
import { deleteVacancy } from "@/actions/server/deleteVacancy";
import { css } from "@emotion/react";
import { useRouter } from "next/navigation";

interface IDeleteVacancyButtonProps {
  vacancyId: number;
}

const DeleteVacancyButton = (props: IDeleteVacancyButtonProps) => {
  const { vacancyId } = props;
  const router = useRouter();

  const handleClickDeleteVacancy = async () => {
    await deleteVacancy(vacancyId);
    router.refresh();
  };
  return (
    <button
      className="button button--small"
      css={css`
        align-self: flex-start;
        min-width: 200px;
        width: 200px;
      `}
      onClick={handleClickDeleteVacancy}
    >
      Удалить
    </button>
  );
};

export default DeleteVacancyButton;
