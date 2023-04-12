import { useState } from 'react';
import './App.css';
import { Button } from './components/Button.jsx';
import { TitleContador } from './Components/TitleContador';

export function App( { valorInicial } ) {

  console.log({valorInicial})

  const [contador, setContador] = useState(valorInicial)

  // let contador = valorInicial;

  // const setContador = (value) => {
  //   contador = value
  // }

  console.log('me estoy renderizando: ', contador)

  const aumentaContador = (n) => {
    setContador(contador + n)
  }

  const decrementaContador = (n) => {
    setContador(contador - n)
  }

  const restableceContador = () => {
    setContador(valorInicial)
  }

  return (
    <div className='app-container'>
      <h1>Valor: <strong>{ contador }</strong></h1>
      <Button 
        aumentaContador={
          () => {
            setContador(contador + 1)
          }
        }
      />
      <TitleContador contador={contador}/>
      <div className='botones-contador'>
        <Button
          cambiaContador={() => aumentaContador(5)}
          text={"+5"}
        />
        <Button
          cambiaContador={restableceContador}
          text={"Restablecer"}
        />
        <Button
          cambiaContador={() => decrementaContador(5)}
          text={"-5"}
        />
      </div>
    </div>
  );
}
export default App;