import { StrictMode } from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowcard'

function App() {
  // const addAt = (username) => `@${username}`;
  const formattedUsername = (username) => <span>@{username}</span>
  return (
    <StrictMode>
      <section className='App'>
        <TwitterFollowCard 
        formattedUsername={formattedUsername} 
        userName="jessiemartel" 
        name="Jessie Martel"/>
        <br></br>
        <TwitterFollowCard 
        formattedUsername={formattedUsername} 
        userName="gaboriell" 
        name="Paola Gaboriell"/>
      </section>
    </StrictMode>
  ) 
}

export default App