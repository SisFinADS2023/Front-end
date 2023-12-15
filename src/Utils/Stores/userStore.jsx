import { create } from 'zustand'
import { v4 as uuid} from 'uuid'

export const useRegisterStore = create((set) => ({

    registerUser: {
        userId: uuid(),
        firstName: "",
        lastName: "",
        email: "",
        confEmail: "",
        password: "",
        confPassword: "",
    },
    isChecked: false,
    setRegisterUser: (prop, value) => set((state) => ({registerUser: {...state.registerUser, [prop]: value}})),
    setIsChecked: (value) => set({ isChecked: value }),
}))

