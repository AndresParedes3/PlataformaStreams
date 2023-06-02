
import { Plataforma } from "./Plataforma.js";
export class Canal{
	nombre: string;
	banner: string;
	descripcion: string;
	plataforma: Plataforma;

	constructor(nombre: string,banner: string, descripcion: string, plataforma: Plataforma){
		this.nombre = nombre
		this.banner = banner
		this.descripcion = descripcion
		this.plataforma = plataforma

	}
}
//detalle stream