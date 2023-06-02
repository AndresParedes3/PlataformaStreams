import { Aplicacion } from "./Aplicacion"
import { Canal } from "./Canal"
export class Plataforma {
	nombre: string
	descripcion: string
	patrocinador: string
	logo: string

	aplicacion: Aplicacion | undefined
	canales: Canal[]

	constructor(nombre: string,descripcion: string,patrocinador: string, logo: string,) {
		this.nombre = nombre
		this.descripcion = descripcion
		this.patrocinador = patrocinador
		this.logo = logo
		this.canales = []
	}

	
	agregarAplicacion(aplicacion:Aplicacion){
		this.aplicacion = aplicacion
	}

  }

