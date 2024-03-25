import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './assets/all.scss';
// import 'bootstrap/dist/js/bootstrap.bundle'; // 後台人物使用，暫時和 Navbar衝突
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap-icons/font/bootstrap-icons.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
