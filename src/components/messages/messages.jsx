import React from 'react';
import ScrolToBottom from 'react-scroll-to-bottom';

import Message from './message'

import './messages.css'

const Messages = ({messages , name}) => {
    return ( 
        <ScrolToBottom className="messages">
            {messages.map((message, i)=><div key={i}><Message message={message} name={name}/></div>)}
        </ScrolToBottom>
     );
}
 
export default Messages;