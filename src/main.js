import { createApp } from 'vue'

// Bootstrap CSS styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import './style.css'
import App from './App.vue'

import router from './router/router'


import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

createApp(App)
    .component('EasyDataTable', Vue3EasyDataTable)
    .use(router)
    .mount('#app')