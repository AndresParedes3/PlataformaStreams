
import { Plataforma } from "./Plataforma.js";
export class Aplicacion {
	plataformas: Plataforma[];
	
    constructor(plataformas:Plataforma[]){
        this.plataformas = plataformas
    }
  
}

//listado de estreamers en plataforma y llamar por cada canal el nombre del streamer,un aplataforma tiene muchos canales
