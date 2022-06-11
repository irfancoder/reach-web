import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { At } from './components'
import router from './routes'
import mixin from './composables/mixins/global'
import App from './app.vue'
import './sass/app.scss'

/* Place app configuration here where necessary */
const app = createApp(App)
const pinia = createPinia()

/* Global Components */
app.component('at', At)

/* Plugins */
app.use(router)
app.use(pinia)

/* Mixin */
app.mixin(mixin)

/* Vue Mount */
app.mount('#app')
