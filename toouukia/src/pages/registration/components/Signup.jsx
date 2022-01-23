import User from '../../../assets/svg/user'
import Mail from '../../../assets/svg/mail'
// import EyeOff from '../../../assets/svg/eyeOff'
import Lock from '../../../assets/svg/lock'
// import Eye from '../../../assets/svg/eye'
import { useState } from 'react'
// import Loader from "react-loader-spinner";
// import useSignUp from '../../../hooks/signup'
import '../signup.scss'

const SignUp = ({setView}) =>{
    return(
        <div className='register'>
            <div className="header">
                <h3 className="headerBold">
                    Create Account
                </h3>
                <p className="headerText">
                    Please input your email address and password correctly.
                </p>
            </div>
            <form action="" >
                <label htmlFor="">
                    <User width='18px' fill='#797774' stroke='#797774'/>
                    <input type="text" name="first_name" placeholder='First Name'  required/>
                </label>
                <label htmlFor="">
                    <User width='18px' fill='#797774' stroke='#797774'/>
                    <input type="text" name="last_name" placeholder='Last Name'  required/>
                </label>
                <label htmlFor="">
                    <Mail />
                    <input type="email" name="email" id="" placeholder='Email Address'  required/>
                </label>
                <label htmlFor="">
                    <Lock />
                    <input name="password" id="" placeholder='Password'  required/>
                    {/* {
                        eye === false && <EyeOff toggleEyeOn={toggleEyeOn}/>
                    }
                    {
                        eye && <Eye toggleEyeOn={toggleEyeOn}/>
                    } */}
                </label>
                <label htmlFor="" className='submitBtn'>
                    <button>
                        Register
                         {/* {
                            signUpObject && <Loader type="Circles" color="#FFF" height={10} width={10}/>
                        } */}
                    </button>
                    <p className='switch'>
                        Already have an account? 
                        <span onClick={()=>setView('Log in')}>
                            Login
                        </span>
                    </p>
                </label>
            </form>
            
        </div>
    )
}
export default SignUp