import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: "AIzaSyA2wCE1ov8mRca7lSi1EmKB954xg8zom9Q",
    authDomain: "music-player-2424a.firebaseapp.com",
    projectId: "music-player-2424a",
    storageBucket: "music-player-2424a.appspot.com",
    appId: "1:1076213217917:web:208383ad0c55979bbdcf14",
  }

  const app = initializeApp(config)

  
})
