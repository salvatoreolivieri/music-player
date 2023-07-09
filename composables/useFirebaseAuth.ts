import { createUserWithEmailAndPassword, User } from "firebase/auth"

// TODO: Fix this composable
export const useFirebaseAuth = () => {
  const { $firebaseAuth } = useNuxtApp()

  const user = useState<User | null>("fb_user", () => null)

  const registerUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $firebaseAuth,
        email,
        password
      )
      if (userCreds) {
        user.value = userCreds.user
        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error)
      }
      return false
    }
    return false
  }

  return {
    user,
    registerUser,
  }
}
