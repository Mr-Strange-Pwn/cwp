import React from 'react';

import onlineIcon from '../../icon/onlineIcon.png'

import './textcontainer.css'

const Textcontainer = ({users}) => {
   return ( <div className="textContainer">
    <div>
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      {/* <a target="_blank" rel="my intro" href="https://pawan-tiwari.imfast.io"></a> */}
      <h2 onClick={()=>window.open("https://pawan-tiwari.imfast.io")}>Click ... ! to know me little more <span role="img" aria-label="emoji">😊</span> </h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
  )
}
 
export default Textcontainer;