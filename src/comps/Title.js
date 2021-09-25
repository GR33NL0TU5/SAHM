import React from 'react';
import Typewriter from 'typewriter-effect';


const Title = () => {
  return (
    <div className="title">
      <h1>[ S.A.H.M ]</h1>
            <h2 id="text">
              <span
                style={{
                  display: "inline-block",
                }}
              >
                <Typewriter
  options={{
    strings: ['Hello~', 'Share Your Happiest Moment!'],
    autoStart: true,
    loop: true,
  }}
/>
               
              </span>
            </h2>
    </div>
  )
}

export default Title;