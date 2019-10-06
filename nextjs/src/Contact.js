
import React, {Component} from 'react';

class Contact extends Component {
    render(){
        return (
            <div className="contactContainer">
                <div className="inputContainer">
                    <h2><label className="text">Contact Form</label></h2>
                </div>
                <form name="contact" method="POST" data-netlify="true">
                <div className="inputContainer">
                    <p>
                        <label className="text">Your Name: </label><input type="text" name="name" />
                    </p>
                </div>
                <div className="inputContainer">
                    <p>
                        <label className="text">Your Email: </label><input type="email" name="email" />
                    </p>
                </div>
                <div className="inputContainer">
                    <p>
                        <label className="text">Message: </label><textarea name="message"></textarea>
                    </p>
                </div>
                <div className="inputContainer">
                    <p>
                        <button className="callToAction text textWhite" type="submit">Send</button>
                    </p>
                </div>
            </form>
            <style jsx>
            {`
                .contactContainer{
                    padding-top: 40px;
                    min-height: 600px;
                    background: #fff;
                }
                .inputContainer {
                    margin: 30px 0 10px 10px;
                }
                label {
                    display: block;
                    width: 20%;
                    margin-bottom: 20px;
                }
                input {
                    1px solid #ABB0B2;
                    width: 40%;
                    border-radius: 3px;
                    padding: 8px 0;
                    text-indent: 1%

                }
                textarea {
                    1px solid #ABB0B2;
                    width: 40%;
                    height: 100px;
                    border-radius: 3px;
                    padding: 8px 0;
                    text-indent: 1%
                }
                .text{
                    font-family: 'Encode Sans Expanded', sans-serif;
                    font-size: 1em;
                }
                .textWhite {
                    color: white;
                }
                button {
                    width: 20%;
                    margin: 20px 0 20px 20%;
                    height: 30px;
                    background-color: #519ead;
                }

            `}</style>
            </div>
        );
    }
}

export default Contact;
