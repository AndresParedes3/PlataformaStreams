import { Canal } from "./Canal.js";
import { Categoria } from "./Categoria.js";

export class Stream {
	fecha: Date
	duracion: string

	categorias: Categoria[]
	canal: Canal

	constructor(fecha:Date, duracion:string, canal:Canal, categoria:Categoria){
		this.fecha = fecha
		this.duracion = duracion
		this.canal = canal
		canal.agregarStream(this)
		this.categorias = [categoria]
	}
	agregarCategoria(categoria:Categoria){
		this.categorias.push(categoria)
	}
	mostrarDetalle() {
        console.log("Detalle del stream:")
        console.log(`Fecha: ${this.fecha}`)
        console.log(`Duración: ${this.duracion}`)
        console.log(`Canal: ${this.canal.nombre}`)
        console.log("Categorías:")
        this.categorias.forEach((categoria) => {
            console.log(`- ${categoria.nombre}`)
        })
     
    }
}

