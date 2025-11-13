import { Component, type ReactNode } from "react";
import letras from "../helpers/letters";
interface BotonesProp {
    estadoJuego: number,
    clickLetra: (letra: string) => void,
    reiniciar: () => void
}

export default class BotonesComponent extends Component<BotonesProp> {
    letras: string[];

    constructor(props: BotonesProp) {
        super(props);
        this.letras = letras;
    }

    render(): ReactNode | null {
        const { estadoJuego } = this.props;

        if (estadoJuego == 0) return this.botonesLetras();
        if (estadoJuego == 1) return this.botonGanador();
        return this.botonPerdedor();
    }

    botonPerdedor(): ReactNode {
        return <button
            type='button'
            className='mt-3 btn btn-danger align-self-start mx-auto'
            onClick={this.props.reiniciar}>Reiniciar juego</button>
    }

    botonGanador(): ReactNode {
        return <button
            type='button'
            className='mt-3 btn btn-success align-self-start mx-auto'
            onClick={this.props.reiniciar}>Volver a juegar</button>
    }

    botonesLetras(): ReactNode {
        const botones = letras.map((letra, indice) =>
            <button
                type="button"
                key={indice}
                onClick={() => this.props.clickLetra(letra)}
                className='btn btn-outline-primary'>{letra}</button>
        );

        return <div className='d-flex flex-wrap gap-2 mx-auto justify-content-center'>{botones}</div>;
    }


}