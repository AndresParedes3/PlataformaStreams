export class Aplicacion {
    constructor(plataforma) {
        if (plataforma) {
            this.plataformas = [plataforma];
            plataforma.agregarAplicacion(this);
        }
        else {
            this.plataformas = [];
        }
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
        plataforma.agregarAplicacion(this);
    }
    listarPlataformas() {
        console.log("Listado de plataformas:");
        this.plataformas.forEach((plataforma, index) => {
            console.log(`Plataforma ${index + 1}: ${plataforma.nombre}`);
        });
    }
    mostrarDetallePlataforma(nombrePlataforma) {
        const plataformaEncontrada = this.plataformas.find((plataforma) => plataforma.nombre === nombrePlataforma);
        if (plataformaEncontrada) {
            console.log("Detalle de la plataforma:");
            console.log(`Nombre: ${plataformaEncontrada.nombre}`);
            console.log(`Descripción: ${plataformaEncontrada.descripcion}`);
            console.log(`Patrocinador: ${plataformaEncontrada.patrocinador}`);
            console.log(`Logo: ${plataformaEncontrada.logo}`);
            console.log("Canales asociados:");
            plataformaEncontrada.canales.forEach((canal, index) => {
                console.log(`Canal ${index + 1}: ${canal.nombre}`);
            });
        }
        else {
            console.log(`No se encontró la plataforma "${nombrePlataforma}"`);
        }
    }
}
