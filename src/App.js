import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './features/user/userSlice';

function App() {
 const {userInfo} = useSelector((state) => state);
 const dispatch = useDispatch()
 console.log('user is here', userInfo);
  return (
  <>
    <button type='button' onClick={()=> dispatch(addUser({age: 10}))}>click</button>
  </>
  );
}

export default App;
