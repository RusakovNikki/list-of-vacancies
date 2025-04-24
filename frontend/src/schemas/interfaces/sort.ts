import { EVacancyType } from '../enums/vacancy';

export interface ISort {
    employmentType: EVacancyType | null;
    name: string | null;
}
