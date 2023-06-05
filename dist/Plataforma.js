export class Plataforma {
    constructor(nombre, descripcion, patrocinador, logo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.logo = logo;
        this.canales = [];
        this.streamers = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
        canal.agregarPlataforma(this);
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    listarCanales() {
        console.log("Listado de canales:");
        this.canales.forEach((canal, index) => {
            console.log(`Canal ${index + 1}: ${canal.nombre}`);
        });
    }
    listarStreamers() {
        console.log("Listado de streamers:");
        this.streamers.forEach((streamer, index) => {
            console.log(`Streamer ${index + 1}: ${streamer.nickname}`);
        });
    }
}
