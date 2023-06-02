import { Canal } from "./Canal.js";

export class Streamer {
	nickname: string
	descripcion: string
	redesSociales: string;
	canales: Canal[];

	constructor(nickname:string,descripcion:string,redesSociales:string,canales:Canal[]){
		this.nickname = nickname
		this.descripcion = descripcion
		this.redesSociales = redesSociales
		this.canales = canales
	}
}

