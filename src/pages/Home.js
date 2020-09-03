import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import AppsIcon from '@material-ui/icons/Apps'
import Search from '../components/Search'
import '../assets/Home.css'

function Home() {
    return (
        <div>
            <div className='homeHeader'>
                <div className='homeHeaderLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='homeHeaderRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className='homeBody'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
                alt='google-logo'/>
                <div className='homeInputContainer'>
                   {/* Search Component */}
                   <Search /> 
                </div>
            </div>
        </div>
    )
}

export default Home
