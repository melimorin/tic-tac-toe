import avecTemplateHtml from '../avecTemplateHtml.js'

Vue.component('game', avecTemplateHtml({
    template: 'game.html',
    data() {
        return {
            a: "",
            b: "",
            c: "",
            d: "",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            player1: "x",
            player2: "o",
            tour: "x",
            gagnant: ""
        
        }
    },
    mounted() {

    },
    methods: {
       cliquer(c) {
            
            if(c == 1 && this.a == ""){
                this.a = this.tour
            }
            
            if(c == 2 && this.b == ""){
                this.b = this.tour
            }
           
            if(c == 3 && this.c == ""){
                this.c = this.tour
            }
            if(c == 4 && this.d == ""){
                this.d = this.tour
            }
            if(c == 5 && this.e == ""){
                this.e = this.tour
            }
            if(c == 6 && this.f == ""){
                this.f = this.tour
            }
            if(c == 7 && this.g == ""){
                this.g = this.tour
            }
            if(c == 8 && this.h == ""){
                this.h = this.tour
            }
            if(c == 9 && this.i == ""){
                this.i = this.tour
            }
            
            if(this.tour == "x") {
                this.tour = "o"
            }else{
                this.tour = "x"
            }
        //    console.log("lapin: " + c)
       },
       
        retour() {
            this.$emit('cliquer', "accueil")
        }
        
    }
}))








