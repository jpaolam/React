function TwitterFollowCard({userName, name, formattedUsername}) {
  const formatUserName = (username) => `@${username}`
  return (
    <article className='jm-followCard'>
      <header className='jm-followCard-header'>
        <img className='jm-followCard-avatar' alt='El avatar random' 
        src='https://unavatar.io/github/kikobeats'></img>
        <div className='jm-followCard-info'>
          <strong>
            {name}
          </strong>
          <span className='jm-followCard-username'>{formattedUsername}</span>
        </div>
      </header>
      <aside>
        <button className='jm-followCard-button'>
          Seguir
        </button>
      </aside>
      </article>
  ) 
}

export default TwitterFollowCard