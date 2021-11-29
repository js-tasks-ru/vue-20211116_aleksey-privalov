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
  methods: {
    getStyle(image){
      return image == null ? '' : '--bg-url: url("'+image+'")';
    },
  },
  template: `
    <div class="meetup-cover" :style="getStyle(image)">
        <h1 class="meetup-cover__title" v-text="title"></h1>
    </div>`,
});
