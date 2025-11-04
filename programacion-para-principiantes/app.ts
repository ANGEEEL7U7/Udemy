class Auto {
  marca: string = "";
  puertas: number = 0;
  caballosFuerza: number = 0;
  gpsNativo?: boolean;
  fechaFabricacion = "";

  constructor(
    marca: string,
    puertas: number,
    caballosFuerza: number,
    gps?: boolean
  ) {
    this.marca = marca;
    this.puertas = puertas;
    this.caballosFuerza = caballosFuerza;
    this.gpsNativo = gps;
  }

  activarGps() {
    if (this.gpsNativo === undefined) {
      console.log("este auto no cuenta con gps");
    } else {
      console.log("gps esta activo");
    }
  }
}

/*
ahora cuando intentemos crear un auto nos pedira
los siguientes parametros
*/
let autoViejo = new Auto("Mazda", 4, 120);
let autoModerno = new Auto("Nissan", 4, 130, true);
autoViejo.activarGps();//dira que no cuenta con gps
autoModerno.activarGps();//dira gps activo
