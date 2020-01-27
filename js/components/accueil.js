import avecTemplateHtml from '../avecTemplateHtml.js'

Vue.component('accueil', avecTemplateHtml({
    template: 'accueil.html',
    data() {
        return{
        }
    },
    mounted() {

    },
    methods: {
        jouer() {
            this.$emit('cliquer', "game")
        }
    }
}))
