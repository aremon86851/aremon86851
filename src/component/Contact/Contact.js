import React from 'react';
import Heading from '../Heading/Heading';

const Contact = () => {
    return (
        <div className='my-10' id='contact'>
            <Heading>Contact Me...</Heading>
            <iframe
                id="JotFormIFrame-223432091511444"
                title="Fancy Envelope Contact Form"
                onload="window.parent.scrollTo(0,0)"
                allowtransparency="true"
                allowfullscreen="true"
                allow="geolocation; microphone; camera"
                src="https://form.jotform.com/223432091511444"
                frameborder="0"
                style={{ minWidth: "100%", height: "539px", border: "none" }}
                scrolling="no"
            >
            </iframe>

        </div>
    );
};

export default Contact;