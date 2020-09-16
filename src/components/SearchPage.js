import React from 'react'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import useGoogleSearch from '../useGoogleSearch'
import '../assets/SearchPage.css'
import Response from '../response'

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    // API CALL
    // const { data } = useGoogleSearch(term);
    const data = Response;
    console.log(data);

    return (
        <div className='searchPage'>
            <div className='searchPageHeader'>
                <Link to='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
                        alt='google-home'
                        className='searchPageLogo' />
                </Link>
                <div className='searchPageHeaderBody'>
                    <Search hideButtons />
                    <div className='searchPageOptions'>
                        <div className='searchPageOptionsLeft'>
                            <div className='searchPageOption'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPageOption'>
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className='searchPageOption'>
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className='searchPageOption'>
                                <LocalOfferIcon />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className='searchPageOption'>
                                <RoomIcon />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className='searchPageOption'>
                                <MoreVertIcon />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className='searchPageOptionsRight'>
                            <div className='searchPageOption'>
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className='searchPageOption'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {true && (
                <div className='searchPageResults'>
                    <p className='searchPageResultCount'>
                        Aproximadamente {data?.searchInformation.formattedTotalResults}{" "}
                   resultados ({data?.searchInformation.searchTime} segundos)
                </p>
                    {data?.items.map(item => (
                        <div className='searchPageResult'>
                            <a href={item.link}>{item.displayLink}</a>
                            <a href={item.link}><h2>{item.title}</h2></a>
                            <p className='searchPageSnippet'>{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
