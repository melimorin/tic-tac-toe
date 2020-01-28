import avecTemplateHtml from '../avecTemplateHtml.js'

Vue.component('winner', avecTemplateHtml( {
    template:'winner.html',
    props: ['gagnant'],
    data() {
        return {
            
        }
    },
    mounted() {
        // Zone pour changer ce que je veux
        // this.css.backgroundColor = this.generateColor()
    },
    methods: {
        retour() {
            this.$emit('cliquer', "game")
        },
        
    }
}))
