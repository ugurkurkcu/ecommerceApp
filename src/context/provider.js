import React, {useState} from 'react';
import StoreContext from '.';

const Provider = ({children}) => {
  const [bag, setBag] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const addToBag = product => {
    setBag([...bag, product]);
  };

  return (
    <StoreContext.Provider value={{bag, addToBag, isLogin, setIsLogin}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
