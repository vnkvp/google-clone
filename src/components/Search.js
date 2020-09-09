import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import '../assets/Search.css'
import { useHistory } from 'react-router-dom'

function Search({ hideButtons = false }) {

    const [input, setInput] = useState('');
    const history = useHistory();


    const search = e => {
        e.preventDefault();
        console.log('search hit');
        history.push('/search');
    }

    return (
        <form className='search'>
            <div className='searchInput'>
                <SearchIcon className='searchInputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (<div className='searchButtons'>
                <Button variant='outlined' onClick={search} type='submit'>Google Search</Button>
                <Button variant='outlined'>I'm feeling lucky</Button>
            </div>) : (<div className='searchButtons'>
                <Button variant='outlined' onClick={search} type='submit' className='buttonsHidden'>Google Search</Button>
                <Button variant='outlined' className='buttonsHidden'>I'm feeling lucky</Button>
            </div>)}
        </form>
    )
}

export default Search
