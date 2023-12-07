import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        isFollowing: false,
        userName: 'davidguetta',
        name: 'David Guetta'
    },
    {
        isFollowing: true,
        userName: 'charlottedewittemusic',
        name: 'Charlotte De Witte'
    },
    {
        isFollowing: false,
        userName: 'DonDiablo',
        name: 'Don Diablo'
    }
]

export function App () {
    const formatUserName = (userName) => `@${userName}`
    
    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                initialIsFollowing 
                userName='arminvanbuuren' 
                name='Armin Van Buuren'
            />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                initialIsFollowing={false} 
                userName='Alanwalkermusic' 
                name='Alan Walker' 
            />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                initialIsFollowing={false} 
                userName='PeggyGou' 
                name='Peggy Gou' 
            />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                initialIsFollowing 
                userName='CalvinHarris' 
                name='Calvin Harris' 
            />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                initialIsFollowing 
                name='EdwinRees' 
            />
            {
                users.map(user => {
                    const { isFollowing, userName, name} = user
                    return (
                        <TwitterFollowCard 
                            formatUserName={formatUserName}
                            initialIsFollowing={isFollowing}
                            userName={userName}
                            name={name}
                            key={userName}  // always required an id for react to be able to indentified the element we're refering. Has to be unique like if the database return an id. NEVER user Math.random() or datenow similar cause the idea is that everytime the same component render should have the same id.
                        />
                    )
                })
            }

        </section>
        
    )
}