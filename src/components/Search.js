import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import '../assets/Search.css'

function Search({ hideButtons = false }) {

    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();


    const search = e => {
        e.preventDefault();
        console.log('search hit', input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search');
    }

    return (
        <form className='search'>
            <div className='searchInput'>
                <SearchIcon className='searchInputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} required/>
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
