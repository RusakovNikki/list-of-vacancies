import { EVacancyType } from "../enums/vacancy";

export interface IVacancy {
  id: number;
  name: string;
  URL?: string;
  areaName?: string;
  employerName?: string;
  employmentTypeId?: EVacancyType;
  employmentTypeName?: string;
  description?: string;
  logoURL?: string;
}

export interface IVacancyWrapper {
  result: IVacancy[];
  page: number;
  size: number;
  count: number;
}
