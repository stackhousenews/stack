import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './index.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
  })

app.use(createPinia())
app.use(router, axios)
app.use(vuetify)

app.mount('#app')
