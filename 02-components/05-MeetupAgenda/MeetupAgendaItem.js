import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    agendaItemTitle(){
      return this.agendaItem.title == null ? agendaItemDefaultTitles[this.agendaItem.type] : this.agendaItem.title;
    },
    agendaItemIcon(){
      return '/assets/icons/icon-'+(agendaItemIcons[this.agendaItem.type] == undefined ? 'key' : agendaItemIcons[this.agendaItem.type])+'.svg';
    },
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="agendaItemIcon" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ agendaItemTitle }}</h3>
        <p class="agenda-item__talk" v-show="agendaItem.speaker != null">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description != null">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
