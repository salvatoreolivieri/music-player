import "./validation"

export const registrationFormSchema = {
  name: "required|min:3|max:100|alpha_spaces",
  email: "required|min:3|max:100|email",
  age: "required|min_value:18|max_value:100",
  password: "required|min:3|max:100",
  confirm_password: "confirmed:@password",
  country: "required",
  tos: "required",
}
