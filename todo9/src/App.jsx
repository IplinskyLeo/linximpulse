// import { useState } from 'react'

import {ShareForm} from './components/ShareForm';
import {TextForm} from './components/TextForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Items } from './components/Items';
import { Form } from './components/Form';
import { Divider } from './components/Divider';

import './global.css';


function App() {

  return (
    <div className="App">
     
     <Header />

      <div>
        <TextForm />
        <Form />
      </div>

      <Divider>Banana</ Divider>
      <Divider>Sua seleção especial</ Divider>
    <h1>ta ok</h1>

    </div>
  )
}

export default App
