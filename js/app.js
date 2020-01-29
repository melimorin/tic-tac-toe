import './components/btn.js'
import './components/game.js'
import './components/accueil.js'
import './components/winner.js'

new Vue({
    el: '#app',
    data: {
        pageActive: "accueil",
        afficherBouton: true,
        gagnant: null
    },
    mounted() {
       
    },
    methods: {
        changerPage(page) {
            this.pageActive = page
        },
        nomGagnant(gagnant){
            this.gagnant = gagnant
        }
        
    }
})
