import { createApp } from 'vue'

import App from '@/App.vue'
import pinia from '@/plugins/pinia'
import router from '@/plugins/router'
import vuetify from '@/plugins/vuetify'

import { registerComponents } from '@/components'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

registerComponents(app)

app.mount('#app')
