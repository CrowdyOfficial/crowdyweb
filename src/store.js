import create from "zustand";

const useStore = create((set) => ({
  isOpen: false,
  setMenu: false,
}));

export default useStore;
