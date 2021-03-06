import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Требуется создать Vue приложение
const RootComponent = defineComponent({
	name: 'Root',
	data(){
		return {
      filter: '',
      // From https://jsonplaceholder.typicode.com/comments
      emails: [
        'Eliseo@gardner.biz',
        'Jayne_Kuhic@sydney.com',
        'Nikita@garfield.biz',
        'Lew@alysha.tv',
        'Hayden@althea.biz',
        'Presley.Mueller@myrl.com',
        'Dallas@ole.me',
        'Mallory_Kunze@marie.org',
        'Meghan_Littel@rene.us',
        'Carmen_Keeling@caroline.name',
        'Veronica_Goodwin@timmothy.net',
        'Oswald.Vandervort@leanne.org',
        'Kariane@jadyn.tv',
        'Nathan@solon.io',
        'Maynard.Hodkiewicz@roberta.com',
        'Christine@ayana.info',
        'Preston_Hudson@blaise.tv',
        'Vincenza_Klocko@albertha.name',
        'Madelynn.Gorczany@darion.biz',
        'Mariana_Orn@preston.org',
        'Noemie@marques.me',
        'Khalil@emile.co.uk',
        'Sophia@arianna.co.uk',
        'Jeffery@juwan.us',
        'Isaias_Kuhic@jarrett.net',
      ],
		};
	},
  methods: {
    marked(Email) {
      let pos;
      return this.filter && Email.toLowerCase().includes(this.filter.toLowerCase(), pos);
    },
  },
  computed: {
    isMarked() {
      return this.emails.map(this.marked);
    }
  }
});

const app = createApp(RootComponent);

const vm = app.mount('#app');

window.vm = vm;