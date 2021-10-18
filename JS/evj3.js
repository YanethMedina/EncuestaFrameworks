new Vue({
    el:'#seccion',
    data:{
        estado:false,
        cambio:'Ocultar',
        leng:'',
        lenguajespro:[],

        respuesta:'',
        primera:'',
        temps:'',
        anios:'',
        tpro:false,
        gracias:'',
        exp:false,
        valido:'',
        lenguajes:false,
        motiva:'',
        exper:'',
        res:true,
    },
    methods:{
        cambiar:function(){
            
            if(this.respuesta==1){
                this.estado='true';
                }
                else{
                   this.estado='false'; 
                   this.gracias="";
                   this.primera+='Me gusta programar';
                   this.res=true;
                } 
               
        },
        cambiar1:function(){
            if(this.respuesta==0){
                this.estado='';
                this.lenguajes='';
                this.gracias="Gracias por Participar";
                this.res='';
                this.tpro='';
                this.exp='';
            }
        },
        validar:function(){
            if(this.anios>=0 && this.anios<2){
                this.tpro=true;
                this.exp='';
                this.lenguajes=true;
                this.anios="Cuento con " + this.anios + " año(s) de experiencia programando";
                this.motiva="Lo que mas me motiva para programar es " + this.motiva;
            }
            else if(this.anios>=2){
                    this.exp=true;
                    this.tpro='';
                    this.lenguajes=true;
                    this.anios="Cuento con " + this.anios + " año(s) de experiencia programando";
                    this.exper="Mi experiencia como programador(a) es " + this.exper;
                }
            else if(this.anios<0){
                this.valido="Tiempo de experiencia invalido";
                this.exp='';
                this.tpro='';
                this.lenguajes='';
            }
        },
        agregar(){
            this.lenguajespro.push(this.leng);
            this.leng='De lenguajes de programacion conozco';
        }
    }
});