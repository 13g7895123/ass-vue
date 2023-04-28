import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// vue3-easy-data-table
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// DataTable
import DataTable from 'datatables.net-vue3'

// pinia
import { createPinia } from 'pinia'

const app = createApp(App)

app.component('EasyDataTable', Vue3EasyDataTable)
app.use(DataTable)
app.use(createPinia())
app.mount('#app')
