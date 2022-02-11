import React, { useState, useEffect} from 'react'

import './styles.scss'


const SingStar = () => {

  const [singer, setSinger] = useState(''); 

  useEffect(() => {
    return ` ${singer}`; 

    }, [singer]);


  return (

  <div className='inputSinger'>

    <h2>Register</h2>

    <input value={singer} onChange={(event) => setSinger(event.target.value)} />

    <p> { singer ? 'WELCOME' : 'Please type some name' } </p>

     <h3> {singer} </h3> 



  </div>
  );
};

export default SingStar;
