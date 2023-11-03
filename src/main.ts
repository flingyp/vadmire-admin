import { createApp } from 'vue';
import App from './App.vue';
import useModules from '~/modules';
import useDirectives from '~/directives';
import '~/styles/index.css';

const app = createApp(App);

useDirectives(app); // register directives
useModules(app); // register package modules

app.mount('#app');
