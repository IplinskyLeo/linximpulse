// import { useState } from 'react'

import {ShareForm} from './components/ShareForm';
import { Divider } from './components/Divider';
import {TextForm} from './components/TextForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Items } from './components/Items';
import { Form } from './components/Form';

// import './api/api.js';
import './global.css';
import { useEffect, useState } from 'react'









function App() {

  const [product, setProduct] = useState([])
  const [page, setPage] = useState(1)
  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
  
  const getApi = async () => {
      let res = await fetch(url).then((data) => data.json());
      setPage(page + 1);
      setProduct([...product, ...res.products]);
      console.log(res)
  };
  
  useEffect(() => {
    getApi();
  }, []);
  
  





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



      <div className='styles.card'>
      {product.map(produto => {
        return (

          <Items
          key={produto.id}
          image={produto.image}
          name={produto.name}
          description={produto.description}      
          oldPrice={`De: R$${produto.oldPrice},00`}
          specialOffer={`Por: R$${produto.price},00`}
          installments={`ou ${produto.installments.count}x de R$${produto.installments.value}0`} 
          /> 
          
        )
      })}
      </div>  

      <div className='styles.moreContent'>

      <button className='styles.buttonProduct'
        onClick={getApi}>Ainda mais produtos!</button>

      </div>



      <Divider text="Compartilhe a novidade" />
      <ShareForm />

      </main>
      <Footer />

    </div>
  )
}

export default App
