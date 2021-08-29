import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/appRouter";
import './index.css';
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Header from './components/header';
import Loader from './components/loader';
import base from 'base';




function App() {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading){
    return <Loader/>
  }

  return (
      <BrowserRouter>

      <Header></Header>
      <AppRouter></AppRouter>
      </BrowserRouter>
  );
};

export default App;
