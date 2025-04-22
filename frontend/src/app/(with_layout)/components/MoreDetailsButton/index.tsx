"use client"

import { IVacancy } from "@/schemas/interfaces/vacancy";
import { useRouter } from "next/navigation";

interface IMoreDetailsButtonProps {
    vacancy: IVacancy;
}

const MoreDetailsButton = (props: IMoreDetailsButtonProps) => {
    const { vacancy } = props;
    const router = useRouter();

    return (
        <div className="vacancy-list__flex-item">
            <div className="vacancy-list__desc">
                <div className="vacancy-list__title roboto">{vacancy.name}</div>
            </div>
            <div
                className="vacancy-list__more-btn roboto"
                onClick={() => {
                    router.push(vacancy.id.toString());
                }}
            >
                Подробнее
            </div>
        </div>
    )
}

export default MoreDetailsButton
