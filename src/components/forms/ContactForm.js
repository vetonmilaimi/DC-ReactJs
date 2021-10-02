import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return(
        <div className="contact-form">
            <h1>Na shkruani përmes emailit</h1>
            <form action="mailto:veton.milaimi1@gmail.com" method="post">

                <div>
                    <label htmlFor='name'>Emri i juaj:</label> <br />
                    <input type="text" id="name" placeholder="Emri dhe Mbiemri" required/>
                </div>

                <div>
                    <label htmlFor='message'>Mesazhi i juaj:</label> <br />
                    <textarea type="text" id="message" placeholder="Mesazhi" rows="5" required/>
                </div>

                <div>
                    <button type="submit" className="btn--outline">
                        Dërgoje
                    </button>
                </div>
                
            </form>
        </div>
    );
}

export default ContactForm;