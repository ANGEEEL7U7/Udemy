
import { Component, type ReactNode } from 'react'
import './App.css'
import ImagenesIntetos from './components/ImagenesIntentos'

import palabras from './helpers/palabras'
import numeroAleatorio from './helpers/numeroAleatorio';
import Botones from './components/Botones';

type AppProps = object
interface AppState {
  intentos: number;
  letrasSeleccionadas: string[];
  estadoJuego: number;
}
export default class App extends Component<AppProps, AppState> {
  palabra: string = palabras[numeroAleatorio(palabras.length, 0)];

  get letrasEncontradas(): string {
    return this.palabra.split('')
      .map(p => this.state.letrasSeleccionadas.includes(p) ? p : '_')
      .join(' ');
  }
  constructor(props: AppProps) {
    super(props);
    this.state = {
      intentos: 0,
      letrasSeleccionadas: [],
      estadoJuego: 0
    };
  }

  cargarLetra = (letra: string): void => {
    if (!this.palabra) throw new Error("Sin palabra.");

    if (this.palabra.includes(letra)) {
      this.setState({ letrasSeleccionadas: [...this.state.letrasSeleccionadas, letra] });
    } else {
      this.setState({ intentos: Math.min(this.state.intentos + 1, 9) });
    }
  }

  componentDidUpdate(_prevProps: object, prevState: Readonly<AppState>, _snapshot?: void): void {
    const estados = this.state;
    this.validarJuego(prevState, estados);
  }

  validarJuego = (prevState: Readonly<AppState>, state: Readonly<AppState>): void => {
    if (prevState.intentos === state.intentos
      && prevState.letrasSeleccionadas.length === state.letrasSeleccionadas.length
    ) return;

    const conteoEncontrados = this.palabra.split('')
      .filter(p => state.letrasSeleccionadas.includes(p)).length;
    if (state.intentos >= 9) {
      this.setState({ estadoJuego: 2 });
    } else if (conteoEncontrados === this.palabra.length) {
      this.setState({ estadoJuego: 1 });
    }
  }


  reiniciar = (): void => {
    this.setState({
      intentos: 0,
      letrasSeleccionadas: [],
      estadoJuego: 0
    })
    this.palabra = palabras[numeroAleatorio(palabras.length, 0)];
  }

  render = (): ReactNode => {

    return <div className='h-100 d-flex container py-md-0 py-3'>
      <div className='card m-auto w-75'>
        <div className='card-header d-flex flex-md-row flex-column justify-content-between align-items-start gap-2 gap-md-0'>
          <span className='card-title my-auto'>Juego del ahorcado</span>
          <button
            onClick={this.reiniciar}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Reiniciar juego"
            className='btn btn-outline-secondary text-body '>
            <i className="bi bi-arrow-clockwise"></i> <span className='my-auto'>Reiniciar</span>
          </button>
        </div>
        <div className='card-body'>
          <div className='d-flex flex-md-row flex-column-reverse justify-content-between'>
            {this.contenidoJuego()}
            <div className='d-flex justify-content-center w-md-50 w-100'>{this.imagenesIntentos()}</div>
          </div>
        </div>
      </div>
    </div>
  }

  contenidoJuego(): ReactNode {
    return <div className='d-flex flex-column align-items-md-start w-md-50 w-100 align-items-center'>
      <h1 className='fw-bold'>{
        this.state.estadoJuego == 2 ? this.palabra : `${this.letrasEncontradas} ${this.state.estadoJuego === 1 ? '¡Ganaste!' : ''}`
      }</h1>
      <span className='text-muted h5 fw-normal'>{this.state.intentos >= 9 ? 'Perdiste ' : 'Intento: ' + this.state.intentos}</span>
      <Botones estadoJuego={this.state.estadoJuego} clickLetra={this.cargarLetra} reiniciar={this.reiniciar} />
    </div>
  }

  imagenesIntentos(): ReactNode {
    return <ImagenesIntetos numeroIntentos={this.state.intentos} />
  }

}