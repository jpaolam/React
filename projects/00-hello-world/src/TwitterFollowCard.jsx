function TwitterFollowCard({userName, name}) {
  return (
    <article className='jm-followCard'>
      <header className='jm-followCard-header'>
        <img className='jm-followCard-avatar' alt='El avatar random' 
        src='https://unavatar.io/kikobeats'></img>
        <div className='jm-followCard-info'>
          <strong>
            {name}
          </strong>
          <span className='jm-followCard-username'>@{userName}</span>
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