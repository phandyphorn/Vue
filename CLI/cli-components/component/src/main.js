import {createApp} from 'vue'
import App from './App.vue'
import FriendNav from './components/FriendNav.vue'
import FriendForm from './components/FriendForm.vue'
import FriendCard from './components/FriendCard.vue'

const app = createApp(App)
app.component('friend-nav', FriendNav);
app.component('friend-form', FriendForm);
app.component('friend-card', FriendCard);
app.mount('#app')
