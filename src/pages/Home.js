import React from 'react'
import Search from '../components/Search'
import HomeHeader from '../components/HomeHeader'
import '../assets/Home.css'

function Home() {
    return (
        <div>
           <HomeHeader />
            <div className='homeBody'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
                    alt='google-logo'
                />
                <div className='homeInputContainer'>
                    {/* Search Component */}
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
