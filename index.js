
Vue.createApp({
    data() {
        return {
            text: ''
        };
    },

    methods: {
        displayInput(event) {
            this.text = event.target.value;
        },

        displayAlert() {
            window.alert("Alert generale !");
        }
    },
}).mount('#app');