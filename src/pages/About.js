import React from 'react'
import HomeHeader from '../components/HomeHeader'
import '../assets/About.css'

function About() {
    return (
        <div>
            <HomeHeader />
            <div className='fadeIn'>
                <p className='aboutMe'>
                    Este projeto foi desenvolvido por Oswaldo Inácio Dias Junior, utilizando React framework
                    com conexão a API de pesquisas grátis disponibilizada pela empresa Google.
                </p>
            </div>
        </div>
    )
}

export default About
