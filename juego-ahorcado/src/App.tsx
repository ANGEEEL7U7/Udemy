
import { useEffect, useState } from 'react'
import './App.css'
import ImagenesIntetos from './components/ImagenesIntentos'

import palabras from './helpers/palabras'
import BotonesComponent from './components/Botones';
const palabra: string = palabras[
  Math.floor(Math.random() * (palabras.length - 0) + 0)
];
export function App() {

  const [intentos, setIntentos] = useState(0);
  const [letrasSeleccionadas, agregarLetra] = useState<string[]>([]);
  const [estadoJuego, actualizarEstadoJuego] = useState<number>(0);
  const letrasEncontradas = palabra.split('').map(p => letrasSeleccionadas.includes(p) ? p : '_ ');

  useEffect(() => {
    const conteoEncontrados = palabra.split('')
        .map(p => letrasSeleccionadas.includes(p)).filter(i => i).length
    if (intentos >= 9) {
      actualizarEstadoJuego(2);
    } else if(palabra.length === conteoEncontrados){
      actualizarEstadoJuego(1);
    }
  }, [intentos, letrasEncontradas, letrasSeleccionadas])

  function validarLetra(letra: string): void {
    if (palabra.includes(letra)) {
      agregarLetra([...letrasSeleccionadas, letra]);
    } else {
      setIntentos(Math.min(intentos + 1, 9));
    }
  }

  function reiniciar() {
    actualizarEstadoJuego(0);
    setIntentos(0);
    agregarLetra([]);
  }

  return <div className='container d-flex flex-column m-auto'>
    {/*Imagenes */}
    <ImagenesIntetos numeroIntentos={intentos} />
    {/*Palabras */}
    <h3 className='text-center'>{letrasEncontradas}</h3>
    {/*conteo de intentos */}
    <h3 className='text-center fw-bold'>{intentos >= 9 ? 'Perdiste ' : 'Intento: ' + intentos}</h3>
    {/*Botones */}
    <BotonesComponent estadoJuego={estadoJuego} clickLetra={validarLetra} reiniciar={reiniciar} />

  </div>
}
