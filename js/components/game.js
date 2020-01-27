import avecTemplateHtml from '../avecTemplateHtml.js'

Vue.component('game', avecTemplateHtml({
    template: 'game.html',
    data() {
        return{
        }
    },
    mounted() {

    },
    methods: {
        retour() {
            this.$emit('cliquer', "accueil")
        }
        
    }
}))
