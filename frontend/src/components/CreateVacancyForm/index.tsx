import { useButton } from '@scripts/hooks/useButton';
import { useFooterForm } from '@scripts/hooks/useFooterForm';
import { useFormField } from '@scripts/hooks/useFormField';
import { useFormTitle } from '@scripts/hooks/useFormTitle';

interface ICreateVacancyFormProps {
    handleCreateVacation: (e: React.FormEvent) => void;
}

const CreateVacancyForm = (props: ICreateVacancyFormProps) => {
    const { handleCreateVacation } = props;

    const buttonStyles = useButton();
    const formStyles = useFooterForm();
    const formTitleStyles = useFormTitle();
    const formFieldStyles = useFormField();
    return (
        <form onSubmit={handleCreateVacation}>
            <div css={formStyles}>
                <label htmlFor="employerType" css={formTitleStyles}>
                    Тип занятости
                </label>
                <input
                    id="employerType"
                    type="text"
                    placeholder="Не указано"
                    css={formFieldStyles}
                    name="employerType"
                />
            </div>
            <div css={formStyles}>
                <label htmlFor="name" css={formTitleStyles}>
                    Название вакансии
                </label>
                <input id="name" type="text" placeholder="Не указано" css={formFieldStyles} name="name" required />
            </div>
            <div css={formStyles}>
                <label htmlFor="logoURL" css={formTitleStyles}>
                    Ссылка на иконку
                </label>
                <input id="logoURL" type="text" placeholder="Не указано" css={formFieldStyles} name="logoURL" />
            </div>
            <div css={formStyles}>
                <label htmlFor="URL" css={formTitleStyles}>
                    Ссылка на вакансию
                </label>
                <input id="URL" type="text" placeholder="Не указано" css={formFieldStyles} name="URL" />
            </div>
            <div css={formStyles}>
                <label htmlFor="areaName" css={formTitleStyles}>
                    Адрес
                </label>
                <input id="areaName" type="text" placeholder="Не указано" css={formFieldStyles} name="areaName" />
            </div>
            <div css={formStyles}>
                <label htmlFor="employerName" css={formTitleStyles}>
                    Название компании
                </label>
                <input
                    id="employerName"
                    type="text"
                    placeholder="Не указано"
                    css={formFieldStyles}
                    name="employerName"
                />
            </div>
            <div css={formStyles}>
                <label htmlFor="description" css={formTitleStyles}>
                    Описание
                </label>
                <input id="description" type="text" placeholder="Не указано" css={formFieldStyles} name="description" />
            </div>
            <button type="submit" style={buttonStyles}>
                Создать
            </button>
        </form>
    );
};

export default CreateVacancyForm;
