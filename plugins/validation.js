import veeValide from "vee-validate"
import { Form as VeeForm, Field as VeeField } from "vee-validate"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("veeValide", veeValide)

  nuxtApp.vueApp.component("VeeForm", VeeForm)
  nuxtApp.vueApp.component("VeeField", VeeField)
})
