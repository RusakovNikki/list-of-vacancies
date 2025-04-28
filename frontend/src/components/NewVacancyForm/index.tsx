import FormItemControl from '@components/controls/FormItemControl';

import { useButton } from '@scripts/hooks/useButton';

interface INewVacancyFormProps {
    handleCreateVacation: (e: React.FormEvent) => void;
}

const NewVacancyForm = (props: INewVacancyFormProps) => {
    const { handleCreateVacation } = props;

    const buttonStyles = useButton();
    return (
        <form onSubmit={handleCreateVacation}>
            <FormItemControl labelText="Тип занятости" type="employerType" />
            <FormItemControl labelText="Название вакансии" type="name" />
            <FormItemControl labelText="Ссылка на иконку" type="logoURL" />
            <FormItemControl labelText="Ссылка на вакансию" type="URL" />
            <FormItemControl labelText="Адрес" type="areaName" />
            <FormItemControl labelText="Название компании" type="employerName" />
            <FormItemControl labelText="Описание" type="description" />
            <button type="submit" css={buttonStyles}>
                Создать
            </button>
        </form>
    );
};

export default NewVacancyForm;
