export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    mostrarDetalle() {
        console.log("Detalle del streamer:");
        console.log(`Nickname: ${this.nickname}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Redes Sociales: ${this.redesSociales}`);
        console.log("Canales asociados:");
        this.canales.forEach((canal, index) => {
            console.log(`Canal ${index + 1}`);
        });
    }
}
