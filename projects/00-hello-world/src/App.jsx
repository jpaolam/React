import { StrictMode, useState } from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {
  const [name, setName] = useState('Jessie Martel')
  // const addAt = (username) => `@${username}`;
  const formattedUsername = (username) => <span>@{username}</span>
  //No tan buena práctica, pero se puede hacer así también
  // const jmartel = {
  //   name: 'Jessie Martel',
  //   username: 'jessiemartel',
  //   formattedUsername: (username) => formattedUsername({username})
  // }
  // const gaboriell = {
  //   name: 'Paola Gaboriell',
  //   username: 'gaboriell',
  //   formattedUsername: (username) => formattedUsername({username})
  // }
  return (
    <StrictMode>
      <section className='App'>
        <TwitterFollowCard 
        formattedUsername={formattedUsername} 
        username="jessiemartel"
        name={name}/>

        <button onClick={() => setName('Paola Martel')}>Cambio Nombre</button>
      </section>
    </StrictMode>
  ) 
}

export default App