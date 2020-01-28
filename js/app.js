import './components/btn'
import './components/game'
import './components/accueil'
import './components/winner'

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
