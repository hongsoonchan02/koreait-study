import { create } from "zustand";

const useUserStore = create((set) => ({
    setCurrentUser: (userData) => {
        currentUser: null,
        set({ currentUser: userData });
        logout: () => set({ currentUser: null })
    }
}))

export default useUserStore;