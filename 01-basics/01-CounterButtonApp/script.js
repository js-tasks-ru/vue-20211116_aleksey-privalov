import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

 // Создайте Vue приложение
const RootComponent = defineComponent({
	name: 'Root',
	vue: {
		config: {
			productionTip: false,
			devtools: true,
		}
	},
		data(){
		return {
			counter: 0,
		};
	},
});

const app = createApp(RootComponent);

const vm = app.mount('#app');

window.vm = vm;