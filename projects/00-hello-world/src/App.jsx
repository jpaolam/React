import { StrictMode } from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowcard'

function App() {
  return (
        <StrictMode>
    <>
      <TwitterFollowCard userName="jessiemartel" name="Jessie Martel"/>
      <br></br>
      <TwitterFollowCard userName="martelg" name="Paola Gaboriell"/>
    </>
        </StrictMode>
  ) 
}

export default App