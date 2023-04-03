import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const sugar = useSelector((state) => state.sugar);
  const coffee = useSelector((state) => state.coffee);
  const dispatchFunc = useDispatch();

  const saveData = () => {
    localStorage.setItem('coffee', coffee );
    localStorage.setItem('sugar', sugar);
  };

  const clearData = ()=> {
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar');
    dispatchFunc({type: 'clearData'});
  }

  return (
    <div className='save'>
      {isLoggedIn ? (
        <>
          <button onClick={saveData}>SAVE</button>{' '}
          <button onClick={clearData}>CLEAR</button>
        </>
      ) : (
        <p>You must be logged in to save the list.</p>
      )}
    </div>
  );
};

export default SaveList;
