import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Требуется создать Vue приложение
const RootComponent = defineComponent({
	name: 'Root',
	data(){
		return {
      API_URL: 'https://course-vue.javascript.ru/api',
      meetupId: '0',
      meetupObject: {
        title: 'No title'
      },
		};
	},
  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${this.API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    },
  },
  watch: {
    async 'meetupId'() {
      this.meetupObject = await this.fetchMeetupById(this.meetupId);
    },
  },
});

const app = createApp(RootComponent);

const vm = app.mount('#app');

window.vm = vm;