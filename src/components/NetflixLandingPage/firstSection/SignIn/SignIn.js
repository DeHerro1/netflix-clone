import React, {useState} from 'react';
import './SignIn.css';
import Logo from '../../../../assets/netflixClone.png';
import {Input,Button} from '@material-ui/core';

const SignIn = (props) =>  {
  const [email, setEmail] = useState('');
  const [verified, setVerified] = useState(false);

   function InputChangeHandler(e) {
        let input = email;
        input = e.target.value;
        setEmail(input);
    }
    console.log(props);
    function handleSubmit() {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
       let isValid = pattern.test(email);
        if(isValid) {
          props.history.replace('/netflixHomepage');
          setVerified(false);
          setEmail("");
        }
        else {
          setVerified(true);
          setEmail("");
        }
    }

  return (
        <div className="Sign">
           <img src={Logo} className="netflix_log" alt="Netflix Logo" />
           <div className="form_div">
             <h3 className='signIn-header'>Sign In</h3>
           <form>
               {verified && <p className="verified">Enter a valid email</p>}
               <Input
                 onChange={InputChangeHandler}
                 value={email}
                 className="input_email"
                 placeholder="Email" /><br/>
                 <Input 
                 className="input_password"
                 placeholder="Password" />
                 <Button 
                 className="input_btn"
                 onClick={handleSubmit}
                 >Sign in</Button>
            </form>
           </div>
        </div>
  );};
export default SignIn;
