import React from 'react'
import '../../App.css'
import ContactForm from '../ContactForm'
import Footer from '../Footer'
import HeroSectionContact from '../HeroSectionContact'

function Contact() {
    return (
        <>
            <HeroSectionContact />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;