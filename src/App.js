import React from 'react';
import "../src/assets/tailwind.css";
import SwellLogo from "../src/assets/images/swell-logo.png";

function App() {
  return (
    <div className="body h-screen">
      
      <div className="header p-13">
        <img className="p-14"  src={SwellLogo}/>
      </div>

      <div className="main flex justify-center items-center">
        <div className="upper-main-content">
          <p className="text-4xl font-medium">Verify your email address</p>
          <p className="upper-second-p text-base">Please check your inbox for jaequery@gmail.com and enter the code below</p>
        </div>
        <div className="form-container">
          <form className="form">
            <input type="text"></input>
            <button className="btn py-4 px-4 text-base border-solid border border-transparent cursor-pointer shadow-none rounded">Continue</button>
          </form>
        </div>

        <div className="footnotes text-sm">
          <p>Didn't receive it?</p>
          <p className="foot-second-p">Send again</p>
        </div>
      </div>
    </div>
  );
}

export default App;
