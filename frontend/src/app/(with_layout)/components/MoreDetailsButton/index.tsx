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
        <div className="jobs-container__flex-item">
            <div className="jobs-container__desc">
                <div className="jobs-container__title roboto">{vacancy.name}</div>
            </div>
            <div
                className="jobs-container__more-btn roboto"
                onClick={() => {
                    router.push(vacancy.id.toString());
                }}
            >
                more details
            </div>
        </div>
    )
}

export default MoreDetailsButton
