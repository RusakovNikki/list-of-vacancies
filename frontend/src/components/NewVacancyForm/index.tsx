import Button from '@components/Button';
import FormItemControl from '@components/controls/FormItemControl';

interface INewVacancyFormProps {
    handleCreateVacation: (e: React.FormEvent) => void;
}

const NewVacancyForm = (props: INewVacancyFormProps) => {
    const { handleCreateVacation } = props;

    return (
        <form onSubmit={handleCreateVacation}>
            <FormItemControl labelText="Тип занятости" type="employerType" />
            <FormItemControl labelText="Название вакансии" type="name" />
            <FormItemControl labelText="Ссылка на иконку" type="logoURL" />
            <FormItemControl labelText="Ссылка на вакансию" type="URL" />
            <FormItemControl labelText="Адрес" type="areaName" />
            <FormItemControl labelText="Название компании" type="employerName" />
            <FormItemControl labelText="Описание" type="description" />
            <Button type="submit">Создать</Button>
        </form>
    );
};

export default NewVacancyForm;
