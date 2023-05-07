import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// router
import route from "./router"

// primevue
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

// vue3-easy-data-table
// import Vue3EasyDataTable from 'vue3-easy-data-table';
// import 'vue3-easy-data-table/dist/style.css';

// DataTable
// import DataTable from 'datatables.net-vue3'

// pinia
import { createPinia } from 'pinia'

const app = createApp(App)

// app.component('EasyDataTable', Vue3EasyDataTable)
// app.use(DataTable, Column, ColumnGroup, Row)
app.use(PrimeVue);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar)
app.use(route)
app.use(createPinia())
app.mount('#app')
