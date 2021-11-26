import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
};

// Требуется создать Vue приложение
const RootComponent = defineComponent({
	name: 'Root',
	data(){
		return {
      meetupId: '0',
      meetupObject: null,
      meetupTitle: '',
		};
	},
  watch: {
    async 'meetupId'() {
      this.meetupObject = await fetchMeetupById(this.meetupId);
    },
    meetupObject: {
      deep: true,
      handler() {
        this.meetupTitle = this.meetupObject == null ? 'No title' : this.meetupObject.title;
      },
    },
  },
});

const app = createApp(RootComponent);

const vm = app.mount('#app');

window.vm = vm;