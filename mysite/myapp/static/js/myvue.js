var myapp = Vue.createApp({
    data() {
        return {
            suggestions: [],
            vueTitle: 'CINS 465',
            test: 'testing'
        }
    },
    mounted() {
        //get request
        //use results
        axios.get('/suggestions/')
            .then(function (response) {
                // handle success
                myapp.suggestions = response.data.suggestions;
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        setInterval(() => {
            axios.get('/suggestions/')
                .then(function (response) {
                    // handle success
                    myapp.suggestions = response.data.suggestions;
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }, 10000);
    }
}).mount('#app') // this will only work the index when variable id = app