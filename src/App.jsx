import { useEffect, useState } from 'react';
import Header from './components/Header'
import Guitar from './components/Guitar'
import { use } from 'react';
import { db } from './data/db';
export default function App() {

  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);  //Creamos un state del carrito

  function addCArd (item){    // Realizamos una funcion donde se agregaran los items al carrito
   const itemExist = cart.findIndex(guitar => guitar.id === item.id) 

   if(itemExist >= 0){
    const updateCart = [...cart] //creamos una constante con una copia del card para no caer en que sea mutable.
    updateCart[itemExist].quantity++ // En caso de que exista el elemento sumamos 1 a quantity
    setCart(updateCart)
   }else{
     item.quantity = 1
     setCart(prevCart=>[...prevCart,item])
   }

    
  }

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
       
        <div className="row mt-5">
         
          {data.map((guitar) => ( //Accedemos a cada objeto de la db con la variable guitar
            <Guitar
             key = {guitar.id} // le damos la informacion del id 
             guitar = {guitar} // Le damos toda la informacion del objeto
             //cart = {cart} 
             setCart = {setCart} //Pasamos la funcion setCart para que el lo que contiene cart pueda ser modificado.
             addCard = {addCArd}
            />
          ))};

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

