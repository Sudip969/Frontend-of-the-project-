import { createApp } from 'vue';
//import Vue from 'vue';
import "bootstrap/dist/css/bootstrap.min.css"
//import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';
import router from './routes' 
import store from './store.js'
import App from './App.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseButton from './components/UI/BaseButton.vue';


const app = createApp(App)
app.use(router)
app.use(store)
// app.use(BootstrapVue)
// app.use(BootstrapVueIcons)
app.component('base-button',BaseButton)
app.component('base-dialog',BaseDialog)
app.component('BootstrapIcon', BootstrapIcon);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"
