import type { NextPage } from 'next'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ContactContent from '../components/contact-content'

const Contact = () => {
    return (
        <>
        <Navbar></Navbar>

        <ContactContent></ContactContent>
    
        <Footer></Footer>
        
        </>

    );

}

export default Contact;