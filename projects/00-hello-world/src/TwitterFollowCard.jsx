import { useState } from "react"

function TwitterFollowCard({username, name, formattedUsername}) {
  // const formatUserName = (username) => `@${username}`
  const [isFollowingState, setIsFollowingState] = useState(false)
  const isFollowingText = isFollowingState ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowingState ? 'jm-followCard-button is-following' : 'jm-followCard-button'
  /*Devuelve un array con el valor del estado y una función para actualizarlo
  por ejemplo: const [isFollowing, setIsFollowing] = useState(false)
  isFollowing es el valor del estado, y setIsFollowing es la función para actualizarlo
  */
  const handleClick = () => {
    setIsFollowingState(!isFollowingState)
  }

  return (
    <article className='jm-followCard'>
      <header className='jm-followCard-header'>
        <img className='jm-followCard-avatar' alt='El avatar random' 
        src='https://unavatar.io/github/kikobeats'></img>
        <div className='jm-followCard-info'>
          <strong>
            {name}
          </strong>
          <span className='jm-followCard-username'>{formattedUsername(username)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {isFollowingText}
        </button>
      </aside>
      </article>
  ) 
}

export default TwitterFollowCard