import { EVacancyType } from '../../scripts/enums/vacancy';

export interface ISort {
    employmentType: EVacancyType | null;
    name: string | null;
}
