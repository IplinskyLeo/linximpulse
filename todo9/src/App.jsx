// import { useState } from 'react'

import {ShareForm} from './components/ShareForm';
import { Divider } from './components/Divider';
import {TextForm} from './components/TextForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Items } from './components/Items';
import { Form } from './components/Form';

import './api/api.js';
import './global.css';


function App() {

  return (
    <div className="App">
     
     <Header />

      <main>

      <section className='firstSection'>

        <div className='TextForm'>
          <TextForm className="TextForm"/>
        </div>

        <div className='Form'>
          <Form className="Form"/>
        </div>

      </section>

      <Divider text="Sua seleção especial" />




      <Divider text="Compartilhe a novidade" />
      <ShareForm />

      </main>
      <Footer />

    </div>
  )
}

export default App
