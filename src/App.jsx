
import html2canvas from 'html2canvas'
import { useState } from 'react'
import './App.css';

function App() {

  const [ linea1, setLinea1 ] = useState('')
  const [ linea2, setLinea2 ] = useState('')
  const [ imagen, setImagen ] = useState('')

  const onChangeImagen = function ( evento ) {
    setImagen(evento.target.value)
  }

  const onChangeLinea1 = function ( evento ) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function ( evento ) {
    setLinea2(evento.target.value)
  }

  const onClickExportar = function (evento) {

    html2canvas(document.querySelector('#meme')).then(canvas => {
      var img = canvas.toDataURL('image/png')
      var link = document.createElement('a')
      link.download = 'meme.png'
      link.href = img
      link.click()
    })
    
  }


  return (
    <div className='App'>

      {/* Select picker de memes */}
      <select onChange={onChangeImagen}>
        <option value='fire'>Fire</option>
        <option value='futurama'>Futurama</option>
        <option value='history'>History</option>
        <option value='matrix'>Matrix</option>
        <option value='philosoraptor'>Philosoraptor</option>
        <option value='smart'>Smart Guy</option>
      </select>
      <br/>
      
      {/* Imput text lineas */}
      <input onChange={onChangeLinea1} type='text' placeholder='Encabezado'/> <br/>
      <input onChange={onChangeLinea2} type='text' placeholder='Pie de pagina'/> <br/>
      <button onClick={onClickExportar}>Exportar</button>
      
      {/* Boton crear meme */}
      <div className='meme' id='meme'>
        <span>{linea1}</span>
        <br/>
        <span>{linea2}</span>
        <img src={'/images/' + imagen + '.jpg'} alt={imagen} />
      </div>
      
    </div>
  );
}

export default App;
