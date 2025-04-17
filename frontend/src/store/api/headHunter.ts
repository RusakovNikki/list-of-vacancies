import { IVacancy } from "@/schemas/interfaces/vacancy";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const headHunterApi = createApi({
  reducerPath: "headHunterApi",
  tagTypes: ["headHunter"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getVacancies: builder.query<IVacancy[], void | Record<string, any>>({
      query: (params) => ({
        url: "/vacancies",
        params: params || {},
      })
    }),
    getVacancy: builder.query<IVacancy, number>({
      query: (vacancyId) => ({
        url: `/vacancies/${vacancyId}`,
      }),
    }),
  }),
});

export const { useGetVacanciesQuery, useGetVacancyQuery } = headHunterApi;
