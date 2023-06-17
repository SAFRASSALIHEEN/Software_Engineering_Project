import React from "react";
import './App.css';
import './Styileguide.css';

 function App() {
     return (
         <div className="container-center-horizontal">
            <div className="log-in-1 screen">
                <div className="overlap-group2">
                    <div className="rectangle-5"></div>
                    <div className="rectangle-1"></div>
                    <div className="rectangle-3"></div>
                    <img className="uo-j_logo-1" src="uoj-logo-1.png" alt="UoJ_logo 1"/>
                    <h1 className="faculty-of-engineeri inter-bold-cod-gray-48px">
                        FACULTY OF ENGINEERING <br /> 
                        UNIVERSITY OF JAFFNA 
                    </h1> 
                    <div className="ellipse-17"></div> 
                    </div> 
                    <div className="overlap-group1">
                        <div className="welcome-back opensans-semi-bold-cod-gray-40px"> 
                        WELCOME BACK 
                        </div> 
                        <p className="log-in-to-your-account inter-semi-bold-bunting-16px">
                             Log in to your account 
                        </p> 

                        <div className="overlap-group4">
                             <div className="user-name inter-normal-manatee-18px"> 
                             User Name
                             </div> 
                        </div> 
                        <div className="overlap-group3"> 
                            <div className="password inter-normal-manatee-18px"> 
                                Password 
                            </div>
                        </div><div className="overlap-group5"> 
                        <div className="forgot-password valign-text-middle inter-normal bunting-14px">
                             Forgot password? 
                        </div> 
                             <Link>Reset your password</Link>
                    </div> 
                    <LogInButton>Log In</LogInButton> 
                    
                </div> 
                <div className="overlap-group">
                    <div className="rectangle-2"></div> 
                    <div className="rectangle-4"></div> 
                    <p className="copyright-2023-university-of-jaffna inter-medium black-16px">
                        Copyright 2023 UNIVERSITY OF JAFFNA. 
                    </p> 
                    <div className="contact-us inter-semi-bold-black-24px"> 
                        <span className="inter-semi-bold-black-24px"> 
                            CONTACT US <br /> 
                        </span> 
                        <span className="inter-semi-bold-black-12px"></span> 
                        </div>
                        <p className="ariviyal-nagar-kill inter-medium-black-14px">
                            Ariviyal Nagar, Killinochchi, Sri Lanka. 
                        </p> 
                        <div className="phone inter-medium-black-14px">
                             +94-021-2062161
                        </div> 
                        <div className="adminengjfnaclk inter-medium-black-14px"> 
                            admin@eng.jfn.ac.lk 
                        </div> 
                        <img className="vector" src="vector.svg" alt="Vector" /> 
                        <div className="rectangle-191"></div> 
                        <img className="path-2" src="path-2.svg" alt="Path 2" /> 
                        <img className="path-11" src="path-11.svg" alt="Path 11" /> 
                        <img className="path-10" src="path-10.svg" alt="Path 10" /> 
                    </div> 
            </div>
    </div>
   );
}
export default App;

function Link(props) { 
    const { children } = props;
     return ( 
     <div className="link">
        <div className="reset-your-password valign-text-middle inter-normal jacarta-12px"> 
            {children}
        </div>
    </div> 
    );
}
function LogInButton(props) { 
    const { children } = props; 
    return ( 
        <div className="log-in-button"> 
            <div className="log-in inter-medium-cod-gray-22px"> 
                {children}
            </div> 
        </div>
    );
}


                    