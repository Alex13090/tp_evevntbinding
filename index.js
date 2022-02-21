
Vue.createApp({
    data() {
        return {
            text: '',
            text2: ''
        };
    },

    methods: {
        displayInput(event) {
            this.text = event.target.value;
        },

        displayInputEsc(event) {
            this.text2 = event.target.value;
        },

        displayAlert() {
            alert("Alert generale !");
        }
    },
}).mount('#app');