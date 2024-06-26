import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';

import './index.css';

import { createHead } from '@unhead/vue'
import VueSocials from 'vue-socials';

const head = createHead()


// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

library.add(faXTwitter);

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});


app.use(createPinia());
app.use(router, axios);
app.use(vuetify);
app.use(head);
app.use(VueSocials);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
