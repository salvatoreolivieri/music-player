import { defineRule } from "vee-validate"
import {
  required,
  email,
  min,
  max,
  alpha_spaces as alphaSpaces,
} from "@vee-validate/rules"

defineRule("required", required)
defineRule("min", min)
defineRule("max", max)
defineRule("alpha_spaces", alphaSpaces)
defineRule("email", email)
