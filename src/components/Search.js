import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import '../assets/Search.css'

function Search() {
    return (
        <div className='search'>
            <div className='searchInput'>
                <SearchIcon className='searchInputIcon' />
                <input type='text' />
                <MicIcon />
            </div>
        </div>
    )
}

export default Search
