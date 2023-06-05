export class Canal {
    constructor(nombre, banner, descripcion, streamer) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        this.streamer.agregarCanal(this);
        this.streamings = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
    agregarStreamer(streamer) {
        this.streamer = streamer;
        streamer.agregarCanal(this);
    }
    mostrarDetalleCanal() {
        console.log("Detalle del canal:");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Banner: ${this.banner}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Streamer: ${this.streamer.nickname}`);
        console.log("Streamings asociados:");
        this.streamings.forEach((stream, index) => {
            console.log(`Streaming ${index + 1}: Fecha: ${stream.fecha}, Duración: ${stream.duracion}`);
        });
        console.log(`Plataforma asociada:`);
        if (this.plataforma) {
            console.log(`Nombre: ${this.plataforma.nombre}`);
            console.log(`Descripción: ${this.plataforma.descripcion}`);
            console.log(`Patrocinador: ${this.plataforma.patrocinador}`);
            console.log(`Logo: ${this.plataforma.logo}`);
        }
        else {
            console.log("Ninguna plataforma asociada");
        }
    }
    obtenerNombresStreamers() {
        const nombresDeStreamers = this.streamings.map((stream) => stream.canal.streamer.nickname);
        return nombresDeStreamers;
    }
}
