import avecTemplateHtml from '../avecTemplateHtml.js'

Vue.component('btn', avecTemplateHtml( {
    template:'btn.html',
    props: ['texte'],
    data() {
        return {
            css: {
                backgroundColor: 'rgb(222,229,229)',
                color: '#141616',
                fontFamily: 'Maven Pro, sans-serif' 
            }
        }
    },
    mounted() {
        // Zone pour changer ce que je veux
        // this.css.backgroundColor = this.generateColor()
    },
    methods: {
        
        
    }
}))
