
import React, {Component} from 'react';

class SignUp extends Component {

    componentDidMount () {
        const scriptAmazon = document.createElement("script");
        scriptAmazon.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        scriptAmazon.async = true;
        document.body.appendChild(scriptAmazon);
    }


    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            lastName: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleName(e){
        this.setState({name: e.target.value});
    }

    handleLastName(e){
        this.setState({lastName: e.target.value});
    }

    render(){
        return (
            <div className="pageContainer">
                <div id="mc_embed_signup" className="signupContainer">
                    <form
                        action="https://gmail.us20.list-manage.com/subscribe/post?u=8c1bfb4e83f17c8efacf4d0c9&amp;id=a4c49fde59"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        noValidate
                    >
                    <div id="mc_embed_signup_scroll">
                        <div className="indicates-required text textWhite"><span className="asterisk">*</span> indicates required</div>
                        <div>
                            <label className="text textWhite" htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                            <input
                            type="email"
                            val={this.state.email}
                            onChange={this.onChangeEmail}
                            name="EMAIL"
                            className="required email"
                            id="mce-EMAIL"
                            />
                        </div>
                        <div>
                            <label className="text textWhite" htmlFor="mce-FNAME">First Name </label>
                            <input
                            type="text textWhite"
                            val={this.state.name}
                            onChange={this.handleName}
                            name="FNAME"
                            className=""
                            id="mce-FNAME"
                            />
                        </div>
                        <div>
                            <label className="text textWhite" htmlFor="mce-LNAME">Last Name </label>
                            <input
                            type="text textWhite"
                            val={this.state.lastName}
                            onChange={this.handleLastName}
                            name="LNAME"
                            className=""
                            id="mce-LNAME"
                            />
                        </div>
                        <div id="mergeRow-gdpr" className="mergeRow">
                            <div className="content__gdpr">
                                <label className="text textWhite">Language</label>
                                <p className="text textWhite">Please select your prefered language for newsletters:</p>
                                <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                                <label className="language" htmlFor="gdpr_31913">
                                    <input
                                        type="checkbox"
                                        id="gdpr_31913"
                                        name="gdpr[31913]"
                                        value="Y" className="av-checkbox"
                                    />
                                    <span className="text textWhite">English</span>
                                </label>
                                <label className="language" htmlFor="gdpr_31917">
                                    <input
                                        type="checkbox"
                                        id="gdpr_31917"
                                        name="gdpr[31917]"
                                        value="Y"
                                        className="av-checkbox"
                                    />
                                    <span className="text textWhite">Español</span>
                                </label>
                                </fieldset>
                                <p className="text textWhite textSmall">You can change your mind at any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting us at rafart@rafartmusic.com. We will treat your information with respect. For more information about our privacy practices please visit our website. By clicking below, you agree that we may process your information in accordance with these terms.</p>
                            </div>
                            <div className="content__gdprLegal">
                                <p className="text textWhite textSmall">We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
                            </div>
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                            <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                        </div>
                        <div
                            style={{position: "absolute", left: "-5000px"}}
                            aria-hidden="true"
                        >
                            <input
                                type="text textWhite"
                                name="b_8c1bfb4e83f17c8efacf4d0c9_a4c49fde59"
                                tabIndex="-1"
                                val={""}
                            />
                        </div>
                        <div className="clear">
                            <input
                                type="submit"
                                value="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button text textSmall textWhite"
                            />
                        </div>
                    </div>
                    </form>
                </div>
                <style jsx>{`
                    .pageContainer {
                        display: flex;
                        justify-content: center;
                    }
                    .signupContainer{
                        width: 60%;
                        margin: 80px 0 80px 0;
                        min-height: 600px;
                        background-color: black;
                        padding: 16px 0 16px 3%;
                        border: 1px solid gray;
                    }
                    .asterisk {
                        color: red;
                    }
                    .indicates-required {
                        margin-bottom: 20px;
                    }
                    .mergeRow {
                        width: 90%;
                    }
                    label {
                        display: block;
                        margin-bottom: 20px;
                    }
                    input {
                        1px solid #ABB0B2;
                        width: 90%;
                        border-radius: 3px;
                        padding-top: 8px;
                        margin-bottom: 20px;
                        text-indent: 1%
                    }
                    .text{
                        font-family: 'Encode Sans Expanded', sans-serif;
                        font-size: 1em;
                    }
                    .textSmall {
                        font-size: 0.8em;
                    }
                    .textWhite {
                        color: white;
                    }
                    .language {
                        display: flex;
                        flex-align: start;
                        margin-bottom: 0;
                    }
                    .av-checkbox {
                        width: auto;
                    }
                    .button {
                        cursor: pointer;
                        width: 20%;
                        padding: 0;
                        margin: 20px 0 20px 1%;
                        height: 30px;
                        background-color: #1db954;
                    }
                    @media all and (max-width: 450px) {
                        .signupContainer {
                            width: 90%;
                            margin: 40px 0 40px 0;
                        }
                        .button {
                            width: 30%;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default SignUp;


// <script type='text/javascript'></script>
