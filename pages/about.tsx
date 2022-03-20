import type { NextPage } from 'next'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import AboutContent from '../components/about-content'

const About = () => {
    return (
        <>
        <Navbar></Navbar>

        <AboutContent></AboutContent>
        
        <Footer></Footer>
        
        </>

    );

}

export default About;