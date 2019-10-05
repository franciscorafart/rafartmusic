
import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="mc_embed_signup">
                <form action="https://gmail.us20.list-manage.com/subscribe/post?u=8c1bfb4e83f17c8efacf4d0c9&amp;id=a4c49fde59" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                	<h2>Subscribe</h2>
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                	<label for="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                </label>
                	<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                </div>
                <div className="mc-field-group">
                	<label for="mce-FNAME">First Name </label>
                	<input type="text" value="" name="FNAME" className="" id="mce-FNAME"/>
                </div>
                <div className="mc-field-group">
                	<label for="mce-LNAME">Last Name </label>
                	<input type="text" value="" name="LNAME" className="" id="mce-LNAME"/>
                </div>
                <div className="mc-field-group size1of2">
                	<label for="mce-BIRTHDAY-month">Birthday </label>
                	<div className="datefield">
                		<span className="subfield monthfield"><input className="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"/></span> /
                		<span className="subfield dayfield"><input className="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"/></span>
                		<span className="small-meta nowrap">( mm / dd )</span>
                	</div>
                </div>	<div id="mce-responses" className="clear">
                		<div className="response" id="mce-error-response" style={{display:"none"}}></div>
                		<div className="response" id="mce-success-response" style={{display:"none"}}></div>
                	</div>
                    {
                        //real people should not fill this in and expect good things - do not remove this or risk form bot signups
                    }
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_8c1bfb4e83f17c8efacf4d0c9_a4c49fde59" tabindex="-1" value=""/></div>
                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
