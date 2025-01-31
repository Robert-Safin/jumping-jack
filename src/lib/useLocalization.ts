import { create } from 'zustand'

type Store = {
  lan: string
  setLan: (lan: string) => void
}

const useLocalization = create<Store>()((set) => ({
  lan: 'english',
  setLan: (lan) => set({ lan }),
}))


export default useLocalization
