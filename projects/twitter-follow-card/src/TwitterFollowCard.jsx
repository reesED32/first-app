import { useState } from "react"

export function TwitterFollowCard({ formatUserName, initialIsFollowing, userName='unknown', name }) {
    // const [isFollowing, setIsFollowing] = useState(false)    this is the the default value but I can started it with a prop
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing) 
    }
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar de la primera persona" 
                    src={`https://unavatar.io/youtube/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}