import './TopChara.css';
import { useState, useEffect } from 'react';

function TopChara(props) {
    const [character, setCharacter] = useState([]);
    const [tabFiltered, setTabFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.jikan.moe/v4/top/characters')
            .then(res => res.json())
            .then(data => {
                setCharacter(data.data)
                setTabFiltered(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(true)
            })
    }, [])



    function filterCharacter(e) {
        let newTab = tabFiltered.filter(item => item.name.toLowerCase().includes(e.toLowerCase()))
        setCharacter(newTab)
    }


    return (
        <div className='character'>
            <div className="character-content">
                {loading ? <p>Loading...</p> : <>
                    <div className="character-header">
                        <div className="search">
                            <svg color='grey' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor" /></svg>
                            <input type="search" onChange={(e) => filterCharacter(e.target.value)} />
                        </div>
                    </div>
                    <div className="character-grid">
                        {character.map((character, index) => (
                            <div key={index} className='character-card'>
                                <img src={character.images.jpg.image_url} alt="animÃ©" />
                                <div className='character-card-content'>
                                    <p className='character-name'>{character.name}</p>
                                    <p className='character-pseudo'><b>Nicknames : </b>{character.nicknames.map(nickname => `"${nickname}" `)}</p>
                                </div>
                            </div>
                        ))}
                    </div> </>}
            </div>
        </div>
    );
}

export default TopChara;