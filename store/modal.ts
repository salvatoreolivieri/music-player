import { defineStore } from "pinia"

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false)

  const toggleAuthModal = () => (isOpen.value = !isOpen.value)

  return {
    isOpen,
    toggleAuthModal,
  }
})
