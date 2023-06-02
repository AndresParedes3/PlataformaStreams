export class Aplicacion {
    constructor(plataformas) {
        this.plataformas = plataformas;
    }
    mostrarPlataformas() {
        console.log("Listado de plataformas:");
        this.plataformas.forEach((plataforma) => {
            console.log(`- ${plataforma.nombre}`);
        });
    }
}
