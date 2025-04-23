import { create } from "zustand";

export interface SearchStore {
  name: string;
  employmentTypeName: string;
  setField: (value: string, field: keyof SearchStore) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  name: "",
  employmentTypeName: "",
  setField: (value: string, field: keyof SearchStore) =>
    set((state) => ({ ...state, [field]: value })),
}));

export default useSearchStore;
