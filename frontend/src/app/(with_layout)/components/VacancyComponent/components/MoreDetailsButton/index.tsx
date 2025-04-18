"use client"

import { useRouter } from "next/navigation";

interface IMoreDetailsButtonProps {
    vacancyId: number;
}

const MoreDetailsButton = (props: IMoreDetailsButtonProps) => {
    const { vacancyId } = props;
    const router = useRouter();

    return (
        <div
            className="jobs-container__more-btn roboto"
            onClick={() => {
                router.push(vacancyId.toString());
            }}
        >
            more details
        </div>
    )
}

export default MoreDetailsButton
