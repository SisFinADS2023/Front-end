import { create } from 'zustand'

export const useRegisterStore = create((set) => ({

    registerUser: {
        name: "",
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

