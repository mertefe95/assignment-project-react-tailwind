import React from 'react';
import "../src/assets/tailwind.css";
import SwellLogo from "../src/assets/images/swell-logo.png";

function App() {
  return (
    <div className="body h-screen">
      
      <div className="header p-13">
        <img className="pt-8 pl-8"  src={SwellLogo}/>
      </div>

      <div className="main flex flex-col justify-center items-center pt-48 text-center">
        <div className="upper-main-content">
          <p className="upper-p text-4xl font-medium">Verify your email address</p>
          <p className="upper-second-p text-base pb-10">Please check your inbox for jaequery@gmail.com and <br/> enter the code below</p>
        </div>
        <div className="form-container">
          <form className="form">
            <input className="input h-16 border rounded-sm py-3 px-10 border-solid" type="text"></input>
            <button className="btn ml-6 py-3 px-8 text-base border-solid border border-transparent cursor-pointer shadow-none rounded">Continue</button>
          </form>
        </div>
        
        <div className="footnotes text-sm flex pt-8">
          <p>Didn't receive it?</p>
          <p className="foot-second-p pl-2">Send again</p>
        </div>
        </div>
      
    </div>
  );
}

export default App;
