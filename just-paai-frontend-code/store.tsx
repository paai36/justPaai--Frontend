import { create } from "zustand";

interface sidebarStoreInterface {
    showSidebar: Boolean;
    setShowSidebar: (newState : boolean) => void;
}
export const useSidebarStore = create<sidebarStoreInterface>((set) => ({
  showSidebar: false,
  setShowSidebar: (newState : boolean) => set(() => ({ showSidebar: newState })),
}));
