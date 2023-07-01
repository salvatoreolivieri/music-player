import "~/config/formRules"

export const registrationFormSchema = {
  name: "required|min:3|max:100|alpha_spaces",
  email: "required|min:3|max:100|email",
  age: "",
  password: "",
  confirm_password: "",
  country: "",
  tos: "",
}
