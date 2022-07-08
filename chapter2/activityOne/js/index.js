const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            style:'',
            message: ''
        }
    }
})
app.mount("#appInput")