import { create } from 'zustand'



type Store = {
  lan: string
  setLan: (lan: "eng" | "por") => void
}

const useLocalization = create<Store>()((set) => ({
  lan: 'eng',
  setLan: (lan) => set({ lan }),
}))


export default useLocalization
