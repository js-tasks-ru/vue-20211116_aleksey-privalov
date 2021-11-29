import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    update(value) {
      console.log(value);
      this.$emit('update', value+1);
    },
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" v-text="count" @click="update(count)"></button>`,
});
