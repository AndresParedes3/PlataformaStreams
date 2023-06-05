export class Categoria {
    constructor(nombre, imagen, descripcion, stream = null) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.streamings = [];
        if (stream) {
            this.streamings.push(stream);
        }
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
    static mostrarListado(streams) {
        console.log("Listado de streams:");
        streams.forEach((stream, index) => {
            console.log(`Stream ${index + 1}:`);
            console.log(`Fecha: ${stream.fecha}`);
            console.log(`Duración: ${stream.duracion}`);
            console.log(`Canal: ${stream.canal.nombre}`);
            console.log("Categorías:");
            stream.categorias.forEach((categoria) => {
                console.log(`- ${categoria.nombre}`);
            });
        });
    }
}
//detalle stream
