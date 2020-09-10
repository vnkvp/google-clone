import React from 'react'
import { useStateValue } from '../StateProvider'
import Response from '../response'
import useGoogleSearch from '../useGoogleSearch';
import '../assets/SearchPage.css'

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    
    // API CALL
    // const { data } = useGoogleSearch(term);
    const data = Response;
    console.log(data);

    return (
        <div className='searchPage'>
            <div className='searchPageHeader'><p>{term}</p></div>
            <div className='searchPageResults'></div>
        </div>
    )
}

export default SearchPage
