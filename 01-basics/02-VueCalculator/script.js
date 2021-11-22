import { createApp } from './vendor/vue.esm-browser.js';

 // Создайте Vue приложение
const RootComponent = {
	name: 'Root',
    data() {
        return {
            calc_mode: 'sum',
            number1: 0,
            number2: 1,
        };
    },
    computed: {
        calc_result() {
            if (this.calc_mode === 'sum') {
                return parseInt(this.number1, 10) + parseInt(this.number2, 10);
            }
            else if (this.calc_mode === 'subtract') {
                return this.number1 - this.number2;
            }
            else if (this.calc_mode === 'multiply') {
                return this.number1 * this.number2;
            }
            else if (this.calc_mode === 'divide') {
                return this.number1 / this.number2;
            }
            else {
                return 0;
            }
        }
    },
};

const app = createApp(RootComponent);

const vm = app.mount('#app');

window.vm = vm;