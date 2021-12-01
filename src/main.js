import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './components/axios'

import VueAuth0Plugin from 'vue-auth0-plugin';

// Import the Auth0 configuration
import { domain, clientId, redirectUri } from "../auth_config.json";


let  app = createApp(App);
app.use(router, axios);
app.use(VueAuth0Plugin, {
        domain: domain,
        client_id: clientId,
        redirect_uri: redirectUri,
    });

app.mount('#app');

import '@fortawesome/fontawesome-free/js/all'


