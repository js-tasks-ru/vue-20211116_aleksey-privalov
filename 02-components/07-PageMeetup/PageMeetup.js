import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

	data(){
		return {
			meetupObject: null,
			meetupState: 'loading',
		};
	},

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  watch: {
    meetupId() {
      this.meetupObject = null;
      this.meetupState = 'loading';
      fetchMeetupById(this.meetupId).then(
        result => this.meetupObject = result,
        error => this.meetupState = error.message,
      );
    },
  },

  created(){
    fetchMeetupById(this.meetupId).then(
      result => this.meetupObject = result,
      error => this.meetupState = error.message,
    );
},

  template: `
    <div class="page-meetup">
      <meetup-view v-if="meetupObject !== null" :meetup="meetupObject"></meetup-view>

      <ui-container v-else-if="this.meetupState === 'loading'">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else>
        <ui-alert>{{ meetupState }}</ui-alert>
      </ui-container>
    </div>`,
});
