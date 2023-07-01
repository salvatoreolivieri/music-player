import { defineRule, configure } from "vee-validate"
import {
  required,
  email,
  min,
  max,
  alpha_spaces as alphaSpaces,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
} from "@vee-validate/rules"

defineRule("required", required)
defineRule("min", min)
defineRule("max", max)
defineRule("alpha_spaces", alphaSpaces)
defineRule("email", email)
defineRule("min_value", minValue)
defineRule("max_value", maxValue)
defineRule("confirmed", confirmed)

configure({
  generateMessage: (context) => {
    const messages = {
      required: `The field ${context.field} is required idiot`,
    }

    const message = messages[context.rule.name]
      ? messages[context.rule.name]
      : `The field ${context.field} is invalid.`

    return message
  },
})
