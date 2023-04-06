import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'animate.css';
import AosVue from "aos-vue";
import 'animate.css/animate.min.css';
import VueAnimateOnScroll from 'vue-animate-onscroll'


const app = createApp(App);
app.use(AosVue);
app.mount('#app');
app.use(VueAnimateOnScroll);

