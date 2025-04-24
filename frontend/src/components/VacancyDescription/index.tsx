'use client';

import Parser from 'html-react-parser';

interface IVacancyDescriptionProps {
    name: string;
    description?: string;
}

const VacancyDescription = (props: IVacancyDescriptionProps) => {
    const { description, name } = props;

    return (
        <div className="vacancy-list__flex-item">
            <div className="vacancy-list__desc">
                <div className="vacancy-list__title roboto">{name}</div>
                <div className={`vacancy-list__specifics vacancy-list__specifics--height roboto`}>
                    {Parser(String(description || ''))}
                </div>
            </div>
        </div>
    );
};

export default VacancyDescription;
