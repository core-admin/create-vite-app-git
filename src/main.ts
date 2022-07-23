import '@/styles';
import { createApp } from 'vue';
import App from './App.vue';
import { registerGlobComp } from '@/components/registerGlobComponents';

const app = createApp(App);
registerGlobComp(app);
app.mount('#app');
