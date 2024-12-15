import AppMenu from './AppMenu.vue'

import BaseButton from './BaseButton.vue'
import BaseCard from './BaseCard.vue'

export const registerComponents = (app) => {
  app.component('AppMenu', AppMenu)

  app.component('BaseButton', BaseButton)
  app.component('BaseCard', BaseCard)
}
