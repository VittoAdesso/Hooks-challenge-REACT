import React, { useContext } from 'react';
import UserContext from './UserContext';


export default function Button() {

    const { name } = useContext(UserContext); 

  return (
      <>

    <button > 
        {name}
    </button>
   
      </>
    );
}
