import './components/btn'
import './components/game'
import './components/accueil'

new Vue({
    el: '#app',
    data: {
        pageActive: "game",
        afficherBouton: true,
    },
    mounted() {
       
    },
    methods: {
        changerPage(page) {
            this.pageActive = page
        }
        
    }
})
