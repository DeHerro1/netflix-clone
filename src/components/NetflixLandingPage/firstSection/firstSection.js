import React, {useState} from 'react';
import './firstSection.css';
import logo from '../../../assets/netflixClone.png';
import { Link, Route,Switch,withRouter } from 'react-router-dom';
import { Input} from '@material-ui/core';
import SignIn from './SignIn/SignIn';

const FirstSection = (props) => {

    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(false);

   function InputChangeHandler(e) {
        let input = email;
        input = e.target.value;
        setEmail(input);
    }

    function handleSubmit() {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
       let isValid = pattern.test( email );
       console.log(isValid);
        if(isValid) {
            props.history.replace('/netflixHomepage');
            setVerified(false);
        }else {
            setVerified(true);
        }
    }


    return (
        <div className="firstSection">
            <div className="topLayer">
                <img src={logo} className="netflix_logo" alt="netflix logo" />
                <button className="sign_in">
                   <Link className="signLink" to="/signin">
                        Sign in
                   </Link> 
                    </button>
            </div>
            <section className="text_section">
                <h1 className="text_cap">Unlimited movies, TV shows, and more.</h1>
                <h3 className="sub_text">Watch anywhere. Cancel anytime.</h3>
                <p className="text_watch">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input_button">
                {verified && <p className="verified">Enter a valid email</p>}
                    <Input 
                    type="email" 
                    placeholder="Email address"
                    value={email} 
                    className="email_input1"
                    onChange={InputChangeHandler} />
                    <button 
                        className="start_btn1"
                        onClick={handleSubmit}
                    >GET STARTED
                    </button>
                </div>              
            </section>
            <Switch>
                <Route path="/signin" component={SignIn} />
            </Switch>
        </div>
    );
}

export default withRouter(FirstSection);