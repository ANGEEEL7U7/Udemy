import { Component, type ReactNode } from "react";
import imagenes from "../helpers/imagenes";

interface ArgumentosProp {
    numeroIntentos: number;
}

export default class ImagenesIntetos extends Component<ArgumentosProp> {
    numeroIntentos: number;
    constructor(props: ArgumentosProp) {
        super(props);
        this.numeroIntentos = this.props.numeroIntentos;
        if (this.numeroIntentos >= 9) this.numeroIntentos = 9;
    }

    render(): ReactNode {
        return <img 
            src={imagenes[this.numeroIntentos]} 
            alt="imagen de intento" 
            width={100} 
            className="mx-auto" />
    }
}