export const getVacancies = async () => {
    return await fetch("http://localhost:3001/api/vacancies").then(res => res.json())
}