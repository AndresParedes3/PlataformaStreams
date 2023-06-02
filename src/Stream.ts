import { Canal } from "./Canal.js";
import { Categoria } from "./Categoria.js";

export class Stream {
	fecha: string
	duracion: string
	categoria: Categoria[]
	canal: Canal

	constructor(fecha:string, duracion:string, categoria:Categoria[], canal:Canal){
		this.fecha = fecha
		this.duracion = duracion
		this.categoria = categoria
		this.canal = canal
	}
}
//detalle stream
