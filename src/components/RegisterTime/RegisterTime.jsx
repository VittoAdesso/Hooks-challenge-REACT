import React from 'react';
import UserContext from './UserContext'; 
import Button from './Button';

import './styles.scss'; 

const userGames = {
  name: 'holaaaa', 
  email: '',
}

const RegisterTime = () => {

  return (
    
    <UserContext.Provider value={userGames}>
       <Button />
    </UserContext.Provider>
  );
};

export default RegisterTime;
