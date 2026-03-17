import { create } from "zustand";

const useToastStore = create((set) => ({
    message: '',
    showMessage: (msg) => set({message: msg}),
    clearMessage: () => set({message: ''})
}))

export default useToastStore;