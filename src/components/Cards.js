import React from 'react';
import { CardPokemon } from './CardPokemon';

export const Cards = ({ resultado }) => {
    //console.log("Cards: "+JSON.stringify(resultado))
    return (
        <div className='row m-5 justify-content-center'>
            {
                resultado.map(r => (
                    <div className='col-md-auto'>
                        <ul className=''>
                            <li className='' style={{ listStyle: 'none' }} key={r.name} title={r.title}>
                                <CardPokemon url={r.url} className="d-flex" />
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )

}