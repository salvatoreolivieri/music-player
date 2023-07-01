import { defineRule } from "vee-validate"
import {
  required,
  email,
  min,
  max,
  alpha_spaces as alphaSpaces,
  min_value as minValue,
  max_value as maxValue,
  confirmed
} from "@vee-validate/rules"

defineRule("required", required)
defineRule("min", min)
defineRule("max", max)
defineRule("alpha_spaces", alphaSpaces)
defineRule("email", email)
defineRule("min_value", minValue)
defineRule("max_value", maxValue)
defineRule("confirmed", confirmed)
