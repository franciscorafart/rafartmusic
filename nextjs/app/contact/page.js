import './style.css';

const Contact = () => {
        return (
            <div className="contactContainer">
                <div className="inputContainer">
                    <h2><label className="text">Contact Form</label></h2>
                </div>
                <form name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    // data-netlify-recaptcha="true"
                >

                    <input type="hidden" name="bot-field"/>

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
                    {/* <div data-netlify-recaptcha="true"></div> */}
                    <div className="inputContainer">
                        <p>
                            <button className="callToAction text textWhite" type="submit">Send</button>
                        </p>
                    </div>
                </form>
            </div>
        );
};

export default Contact;
