import imagenes from "./imagenes";

interface Argumentos {
    numeroIntentos: number;
}

export default function ImagenesIntetos(argumentos: Argumentos) {
    let {numeroIntentos} = argumentos;
    if (numeroIntentos >= 9) numeroIntentos = 9;

    return <img src={imagenes[numeroIntentos]} alt="imagen de intento" width={100} className="mx-auto" />
}