export const getVacancy = async (vacancyId: string) => {
    return await fetch(`http://localhost:3001/api/vacancies/${vacancyId}`).then(res => res.json())
}