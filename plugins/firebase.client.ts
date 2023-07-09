import { initializeApp } from "firebase/app"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { firebase } = config.public
  const app = initializeApp({ ...firebase })

  return {
    provide: {
      firebaseApp: app,
    },
  }
})
