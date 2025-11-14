import { Component, type ReactNode } from "react";
import imagenes from "../helpers/imagenes";

interface ArgumentosProp {
    numeroIntentos: number;
}
export default class ImagenesIntetos extends Component<ArgumentosProp> {

    constructor(props: ArgumentosProp) {
        super(props);
    }

    render(): ReactNode {
        const intentos = this.props.numeroIntentos >= 9
            ? 9 : this.props.numeroIntentos;
        return <img
            src={imagenes[intentos]}
            alt="imagen de intento"
            width={150} />
    }
}