class Elevador{
    private pisoActual : number;
    private numPisos: number;
    private edoPuerta: boolean;
    /*
    edopuerta estados:
        true = abierta
        false = cerrada
    */
   
    constructor(numPisos: number){
        this.numPisos = numPisos;
        this.pisoActual = 0;
        this.edoPuerta = false;
    }
    
    get pisoactual(){
        return this.pisoActual;
    }

    get numpisos(){
        return this.numPisos;
    }

    get edopuerta(){
        return this.edoPuerta;
    }

    /*set pisoactual(n){
        return;
    }

    set edopuerta(n){
        return;
    }
    
    set numpisos(n){
        return;
    }*/

    public abrirPuerta (){
        this.edoPuerta = true;
        console.log("Puerta abierta");
    }

    public cerrarPuerta(){
        this.edoPuerta = false;
        console.log("Puerta Cerrada");
    }
    
    public irA(destino: number){
        if(destino >= this.numPisos){
            console.log("No puedes subir mas pisos");
            return;
        }else{
            this.cerrarPuerta();
            console.log("Destino: "+destino)
            if(this.pisoActual > destino){
                let bajar = this.pisoActual - destino; 
                for(let i = 0; i < bajar; i++){
                    this.bajar();
                }
            }else { 
                let subir = destino - this.pisoActual;
                for(let i = 0; i < subir; i++){
                    this.subir();
                }
                
            }
            this.abrirPuerta();
        }
    }

    private subir(){
        this.pisoActual = this.pisoActual + 1;
        console.log("Has subido un piso, ahora estás en el piso: "+this.pisoActual);
    }
    
    private bajar(){
        this.pisoActual -= 1;
        console.log("Has bajado un piso, ahora estás en el piso: "+this.pisoActual);
    }
}

let elevator = new Elevador(100);
elevator.irA(90);
elevator.irA(30);