import React, { useState } from 'react';
import './App.css';
import { Cards } from './components/Cards';
import PokemonApi from './components/PokemonApi';

function App() {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const state = PokemonApi(url);
  const { cargando, data } = state;

  cargando ? console.log(cargando) : console.log(data.results);

  return (
    <div>
      {
        cargando ? <h3>Cargando. . .</h3> :
          <div className='container' >
            <p style={{ color: 'white', textAlign:'center', marginTop:'10px' }}>This application was created with React and PokeApi by Saul Medina.</p>
            <div className='d-flex justify-content-center mt-5'>
              <button onClick={(() => { setUrl(data.previous) })} className='btn btn-primary m-2'>Anterior</button>
              <button onClick={(() => { setUrl(data.next) })} className='btn btn-primary m-2'>Sguiente</button>
            </div>
            <Cards resultado={data.results} />
          </div>
      }
    </div>
  );
}

export default App;
