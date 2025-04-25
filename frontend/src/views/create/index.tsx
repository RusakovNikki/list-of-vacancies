import { useRouter } from 'next/navigation';

import useCreateVacancy from '@api/create';

import CreateVacancyForm from '@components/CreateVacancyForm';

const CreateVacationPage = () => {
    const { mutate } = useCreateVacancy();
    const router = useRouter();

    const handleCreateVacation = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget as HTMLFormElement);

        mutate(
            {
                name: formData.get('name')!.toString(),
                areaName: formData.get('areaName')?.toString(),
                description: formData.get('description')?.toString(),
                employerName: formData.get('employerName')?.toString(),
                employmentTypeName: formData.get('employerType')?.toString(),
                logoURL: formData.get('logoURL')?.toString(),
                URL: formData.get('URL')?.toString(),
            },
            {
                onSuccess: () => router.push('/'),
                onError: error => console.error(error),
            }
        );
    };

    return <CreateVacancyForm handleCreateVacation={handleCreateVacation} />;
};

export default CreateVacationPage;
