import BaseButton from './BaseButton.vue'
import BaseCard from './BaseCard.vue'

export const registerComponents = (app) => {
  app.component('BaseButton', BaseButton)
  app.component('BaseCard', BaseCard)
}
