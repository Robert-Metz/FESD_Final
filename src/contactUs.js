import React from "react";
import ContactForm from "./contactForm";

export default class ContactUs extends React.Component {
    
        render() {
            return(
            <div>
                <h2>Contact Us!</h2>
                <p>Keep in touch with us by entering your contact information down below!</p>
                <ContactForm/>
                
            </div>
            )
        }

}