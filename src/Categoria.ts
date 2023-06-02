import { Stream } from "./Stream.js";

export class Categoria {
	nombre: string;
	imagen: string;
	descripcion: string;
	stream: Stream[];

	constructor(nombre: string, imagen: string, descripcion:string, stream: Stream[]){
		this.nombre = nombre
		this.imagen = imagen
		this.descripcion = descripcion
		this.stream = stream
	}
	
}
//detalle stream
