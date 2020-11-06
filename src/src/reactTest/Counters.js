import React, {useState, useEffect} from 'react';
import Counter from './Counter';


export default function Counters(){
    const [counters, setCounters] = useState([]);

    useEffect(() => {
        setCounters([
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ])
    },[])

    return(
        <>
        {counters.map(counter=> <Counter key={counter.id}/>)}
        </>
    );
}