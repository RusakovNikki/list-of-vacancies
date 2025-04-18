"use client"

import Parser from "html-react-parser";
import { useState } from "react";

interface IVacancyDescriptionProps {
    name: string;
    description?: string;
}

const VacancyDescription = (props: IVacancyDescriptionProps) => {
    const { description, name } = props;

    const [showMoreDesc, setShowMoreDesc] = useState(true);


    return (
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
                onClick={() => setShowMoreDesc((prev) => !prev)}
            >
                {showMoreDesc ? `more details` : "close"}
            </div>
        </div>
    )
}

export default VacancyDescription
