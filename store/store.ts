import { create } from "zustand";

type ElectionType = {
  description: string;
  end_date: string;
  id: number;
  name: string;
  start_date: string;
  year: string;
};

type ElectionProps = {
    election : any;
    setElection :(election : ElectionType) => void
}

type SelectedCategoryProps = {
    isSelected :boolean,
    setSelected : (state: boolean) => void
}

export const electionStore = create<ElectionProps>((set) => ({
  election:{},
  setElection: (election : ElectionType) => set({election : election})
}));

export const useSelectPostPerElection = create<SelectedCategoryProps>((set) => ({
    isSelected: false,
    setSelected : () => set((state) => ({ isSelected: true }))
}))
