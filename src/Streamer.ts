import { Canal } from "./Canal.js";

export class Streamer {
	nickname: string
	descripcion: string
	redesSociales: string;
	
	canales: Canal[];

	constructor(nickname:string,descripcion:string,redesSociales:string){
		this.nickname = nickname
		this.descripcion = descripcion
		this.redesSociales = redesSociales
		this.canales = []
	}

	agregarCanal(canal:Canal){
		this.canales.push(canal)
	}
	mostrarDetalle() {
        console.log("Detalle del streamer:")
        console.log(`Nickname: ${this.nickname}`)
        console.log(`Descripción: ${this.descripcion}`)
        console.log(`Redes Sociales: ${this.redesSociales}`)
        console.log("Canales asociados:")
        this.canales.forEach((canal, index) => {
            console.log(`Canal ${index + 1}`)
        })
    }
}
