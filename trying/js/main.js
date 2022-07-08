const app = Vue.createApp({
    data() {
        return {
            // Before we get it to use in html file, you need to set here before.
            users: [],
            message: 'Hello!',
            country: 'Cambodia',
            todos: [
                {text: 'Learn Vue'},
                {text: 'Like the video'},
                {text: 'Subscribe to DevMarketer'}
            ],
            counts: 10,
            count: 0,
        }
    },

    methods: {
        getUsers(){
            axios.get('https://reqres.in/api/users?page=1')
            .then(response => {
                this.users = response.data.data;
            })
        },

        countUp() {
            this.count += 1;
        },

        countDown() {
            this.count -= 1;
        }
    }
})
app.mount('#app');