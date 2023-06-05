import { Aplicacion } from "./Aplicacion.js"
import { Plataforma } from "./Plataforma.js"
import { Canal } from "./Canal.js"
import { Streamer } from "./Streamer.js"
import { Stream } from "./Stream.js"
import { Categoria } from "./Categoria.js"

const aplicacion = new Aplicacion

const plataforma1 = new Plataforma("Twitch", "Es la plataforma de streaming mas conocida en el mundo", "Amazon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJHXncrrnkh006nuJtxtXLGGXiomn76o6Nhl8KKc4&s")
aplicacion.agregarPlataforma(plataforma1)

const plataforma2 = new Plataforma("Youtube", "Es una plataforma conocida por los videos pero tambien permite emitir en directo", "Google", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_vaiM-nV1skAaKSeKg3dC7ia8WQpFnvdEgpBiX8P1g&s")
aplicacion.agregarPlataforma(plataforma2)

const streamer1 = new Streamer("Raul Alvarez", "Es español, tiene 34 años, se dedica a hacer streamigs y jugar distintos juegos", "@auronplay en instagram, youtube.com/auronplay")
const streamer2 = new Streamer("Mario Alonso Gallardo", "Es español, tiene 33 años, se dedica a hacer videos y streamings de futbol y fifa", "@djmariio en instagram, youtube.com/DjMaRiiO")

const canal1 = new Canal("AuronPlay", "https://static-cdn.jtvnw.net/jtv_user_pictures/9a03de9c-4deb-4cfb-bbe0-7cbef3b6ff8b-profile_banner-480.png", "Es uno de los streamer mas grandes y vistos del mundo",streamer1)
const canal2 = new Canal("DjMario", "https://pbs.twimg.com/media/DF-FEtUXYAAWTHI.jpg:large", "Es un youtuber que se dedica a hacer streamings y videos", streamer2)
streamer1.agregarCanal(canal1)



const categoria1 = new Categoria("Minecraft", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/08/minecraft-2448327.jpg?tf=3840x", "Juego de mundo abierto")
const categoria2 = new Categoria("Futbol", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXdfe4BeCFM2nLID0d_4T4D94To-Pcc32aw&usqp=CAU", "Juegos, charlas o videos de futbol")

const stream1 = new Stream(new Date(2023,3,31), "1:30:21", canal1, categoria1)
const stream2 = new Stream(new Date(2023,4,5), "2:43:21", canal2, categoria2)
categoria1.agregarStream(stream1);
categoria2.agregarStream(stream2);

streamer1.mostrarDetalle();
streamer2.mostrarDetalle();
canal1.mostrarDetalleCanal();
canal2.mostrarDetalleCanal();
stream1.mostrarDetalle(); 
stream2.mostrarDetalle();

Categoria.mostrarListado([stream1, stream2]);
console.log(canal1.obtenerNombresStreamers())
console.log(canal2.obtenerNombresStreamers())

aplicacion.listarPlataformas();

aplicacion.mostrarDetallePlataforma("Twitch")