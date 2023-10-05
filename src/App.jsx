import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componets/Card'


const cards = [ 

  //Card data here 

  {
    id:1,
    image:'',
    title:'We design logos',
    text:'We have teamed up with brands from all over the world',
  },

  {
    id:2,
    image:'',
    title:'Sahan',
    text:'Hello world',
  },

  //more card data to be added here 

]

 const App = () => {

  const handleClick = (Card) => {

  };

  return (

    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          text={card.text}
          onClick={() => handleClick(card)}
        />
      ))}
    </div>
  )



 }


export default App
