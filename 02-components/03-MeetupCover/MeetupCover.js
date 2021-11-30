import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      requred: false,
    },
    image: {
      type: String,
      requred: false,
    },
  },
  computed: {
    getStyle(){
      return this.image == null ? '' : '--bg-url: url("'+this.image+'")';
    }
  },
  template: `
    <div class="meetup-cover" :style="getStyle">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
