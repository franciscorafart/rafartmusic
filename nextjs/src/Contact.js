
import React, {Component} from 'react';

class Contact extends Component {
    render(){
        return (
            <div className="contactContainer">
                <form name="contact" method="POST" data-netlify="true">
                  <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                  </p>
                  <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                  </p>
                  <p>
                    <label>Message: <textarea name="message"></textarea></label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
            </form>
            <style jsx>
            {`
                .contactContainer{
                    min-height: 600px;
                    background: gray;
                }

            `}</style>
            </div>
        );
    }
}

export default Contact;
