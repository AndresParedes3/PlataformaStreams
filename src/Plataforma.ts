import { Aplicacion } from "./Aplicacion.js"
import { Canal } from "./Canal.js"
import { Streamer } from "./Streamer.js"
export class Plataforma {
  
	nombre: string
	descripcion: string
	patrocinador: string
	logo: string

	aplicacion: Aplicacion | undefined
	canales: Canal[]
	streamers:Streamer[]

	constructor(nombre: string,descripcion: string,patrocinador: string, logo: string) {
		this.nombre = nombre
		this.descripcion = descripcion
		this.patrocinador = patrocinador
		this.logo = logo
		this.canales = []
		this.streamers = []
	}
	agregarCanal(canal:Canal){
		this.canales.push(canal)
		canal.agregarPlataforma(this)

	}
	
	agregarAplicacion(aplicacion:Aplicacion){
		this.aplicacion = aplicacion
	}

	listarCanales() {
        console.log("Listado de canales:")
        this.canales.forEach((canal, index) => {
            console.log(`Canal ${index + 1}: ${canal.nombre}`)
        })
    }
    listarStreamers() {
        console.log("Listado de streamers:")
        this.streamers.forEach((streamer, index) => {
            console.log(`Streamer ${index + 1}: ${streamer.nickname}`)
        })
    }
  }

