//ejercicio de objetos literales

export let carro = {
  marca: "audi",
  puertas: 4,
  electrico: false,
};

export let televisionSmartTv = {
  pulgadas: 30,
  resolucion: "1920x1080",
  silencio: false,
  silenciar() {
    console.log("silencio es: " + this.silencio);
    this.silencio = !this.silencio;
    console.log("silencio ahora es: " + this.silencio);
  },
};

export let youtube = {
  correo: "cuenta@gmail.com",
  canal: "cuenta002",
  suscriptores: 100,
  totalVideos: 2,
  videos: [
    {
      duracionMin: 12.2,
      titulo: "Reto 24horas de youtube",
      descripcion: "este es un video donde realizo un reto",
      likes: 400,
      dislikes: 100,
      comentarios: ["hola", "buen reto", "me aburrio"],
      autor: "cuenta002",
    },
  ],
};
