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
                    <a href='https://github.com/vnkvp'>
                    <Avatar 
                    src='https://lh3.googleusercontent.com/-rOlgD6TbiPo/XtlFjx1XnJI/AAAAAAAAAc4/1TGZMq9e4aYB9FHDBre2iq-e2sZXx3QXgCEwYBhgLKtQDAL1OcqzXIW4thikkT1iBZasm4apsdzh4v-UuolYRtiT-A62qBUXTLLEc8IZAKicE_eaYXlyGW2efZngcT6LxzROb1pirdaYH7OIcFcG0KncFnt3f_wDa26FO9PZen8dswPvkE7-SNWIeXiHjDJZFf2DAoxE6rGEDP64LhbAu7-FBmfDwDQNI1pFAPCepffEbKJDaBpnO7C3ckh5XjfpK719TZ4qaNEXU100eEsXNr8Z6empESAxkzymgkUBKyDVWM65GL8sCXqN74VhLq6WXYwtySFwNHEgT8kDJvCNkX6MEcr_Kitk-RTG4PC5rVkYPp-_bDQT2d-nZR3Ogx2e0PWMQpwAbX9pUIuq6uDsTMFeAnJ__yIPZ3YqN6tqEF0snTAvt-82f2QB9CxaaluY2rz4mlkQCyLQ2NvDg2nis_n6wny-COtxG5VWdrJ07VgTGLR0Z3J2taJFnsVwJAIce9pwB4ugtFBS5YS4bOm7XPjzBbr0ybkh8Mmg9Q-87vh6ofLM88uXYy_uFSmQgJkr4Aha-L4I0Qu_JxcEVl8HEcpSxCMrKqzKmtKtm9K9OxzITTkOOBlcNB9YgLjSZlYzjhhRLz9-emOonjGhCMcXsKov5msGKMISzkvsF/w139-h140-p/IMG_20200529_162912016.jpg' />
                    </a>
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
