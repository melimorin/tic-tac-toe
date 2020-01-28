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
            gagnant: "",
            tour: "x",
            
            
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

            if(this.a == "x" && this.b == "x" && this.c == "x"){
                this.gagnant = "x"
            }
            if(this.d == "x" && this.e == "x" && this.f == "x"){
                this.gagnant = "x"
            }
            if(this.g == "x" && this.h == "x" && this.i == "x"){
                this.gagnant = "x"
            }
            if(this.a == "x" && this.d == "x" && this.g == "x"){
                this.gagnant = "x"
            }
            if(this.b == "x" && this.e == "x" && this.h == "x"){
                this.gagnant = "x"
            }
            if(this.c == "x" && this.f == "x" && this.i == "x"){
                this.gagnant = "x"
            }
            if(this.a == "x" && this.e == "x" && this.i == "x"){
                this.gagnant = "x"
            }
            if(this.g == "x" && this.e == "x" && this.c == "x"){
                this.gagnant = "x"
            }


            if(this.a == "o" && this.b == "o" && this.c == "o"){
                this.gagnant = "o"
            }
            if(this.d == "o" && this.e == "o" && this.f == "o"){
                this.gagnant = "o"
            }
            if(this.g == "o" && this.h == "o" && this.i == "o"){
                this.gagnant = "o"
            }
            if(this.a == "o" && this.d == "o" && this.g == "o"){
                this.gagnant = "o"
            }
            if(this.b == "o" && this.e == "o" && this.h == "o"){
                this.gagnant = "o"
            }
            if(this.c == "o" && this.f == "o" && this.i == "o"){
                this.gagnant = "o"
            }
            if(this.a == "o" && this.e == "o" && this.i == "o"){
                this.gagnant = "o"
            }
            if(this.g == "o" && this.e == "o" && this.c == "o"){
                this.gagnant = "o"
            }

            if(this.gagnant == "x" || this.gagnant == "o"){
                this.winner()
            }

            if (this.a != "" && this.b != "" && this.c != "" && this.d != "" && this.e != "" && this.f != "" && this.g != "" && this.h != "" && this.i != "" ) {
                this.winner()
            }
        
       },
       
        retour() {
            this.$emit('cliquer', "accueil")
        },
        winner() {
            this.$emit('winner', this.gagnant)
            this.$emit('cliquer',"winner")
        }
        
    }
}))








