import React from 'react';
import PokemonApi from './PokemonApi';

export const CardPokemon = (url) => {
    const state = PokemonApi(url);
    const { cargando, data } = state;

    return (
        <div>
            {
                cargando ?
                    <h2>Cargando. . .</h2>
                    :
                    <div className="card tarjetaPokemon">
                        <div className="card-header">
                            <h3 className="Card-title text-center">{data.id}</h3>
                        </div>
                        <div className="card-body">
                            <img src={data.sprites.front_default} alt="Pokemon" style={{width:'150px'}}/>
                        </div>
                        <div className="card-footer">
                            <p className="card-text text-capitalize text-center"><b>{data.forms[0].name}</b></p>
                        </div>
                    </div>
            }
        </div>
    )

}