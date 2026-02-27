import { StrictMode } from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowcard'

function App() {
  const addAt = (username) => `@${username}`;
  return (
    <StrictMode>
      <section className='App'>
        <TwitterFollowCard formatUsername={addAt} userName="jessiemartel" name="Jessie Martel"/>
        <br></br>
        <TwitterFollowCard formatUsername={addAt} userName="gaboriell" name="Paola Gaboriell"/>
      </section>
    </StrictMode>
  ) 
}

export default App