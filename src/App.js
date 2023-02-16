import './App.css';
import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import { createContext, useEffect, useReducer } from 'react';
import reducer, { initialState } from './Components/Reducer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Components/firebase';
export const Usercontext= createContext()


function App() {
  const [state,dispatch]=useReducer(reducer,initialState)

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(authUser)=>{
      if(authUser)
      {
          dispatch({
             type:'SET_USER',
             user:authUser
          })
      }
      else {
        dispatch({
          type:'SET_USER',
          user:null
       })
      }
    })

    return ()=>{
      unsubscribe()
    }

  },[])

  console.log(state.user)
  return (

    <Usercontext.Provider value={[state,dispatch]} >
      
     <Routes>
     
     <Route path='/' element={<> <Header/><Home /></>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/checkout' element={<> <Header/> <Checkout/></>}/>
   
     </Routes>
    
   </Usercontext.Provider>
  );
}

export default App;
