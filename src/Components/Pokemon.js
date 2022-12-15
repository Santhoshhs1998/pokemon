import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [num, setnum] = useState();
    const [name, setname] =useState();
    const [moves, setmoves] =useState();

    useEffect(() => {
        async function getData() {
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name);
            setmoves(res.data.moves.length);
        }
        getData();
    });
    return(
        <>
        <h1>
            The number you have choosen is {num}
        </h1>
        <h1>
            The Pokeman is <span style={{color:'blue'}}> {name}</span>
        </h1>
        <h1>
            The {name} have <span style={{color:'blue'}}>{moves}</span>
        </h1>
        <select name='' id='' value={num} onChange={(event) => {
            setnum(event.target.value);
        }}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='25'>25</option>
            <option value='35'>35</option>
            <option value='55'>55</option>
            <option value='45'>45</option>
        </select>
        </>
    );
};

export default Pokemon;