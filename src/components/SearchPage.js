import React from 'react'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import '../assets/SearchPage.css'

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);

    return (
        <div className='searchPage'>
            <div className='searchPageHeader'><p>{term}</p></div>
            <div className='searchPageResults'></div>
        </div>
    )
}

export default SearchPage
