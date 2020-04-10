import React from 'react';

import './input.css'

const Input = ({sendMessage , message , setMessage}) => {
    return ( 
        <form className="form">
        <input  className="input"
        type="text"
        placeholder="Type a Message..." 
        value={message} 
        onChange={e=> setMessage(e.target.value)}
        onKeyPress={e=> e.key === 'Enter' ? sendMessage(e):null}
        />  
        <button className="sendButton" onClick={(e)=>sendMessage(e)}>send</button>
        </form>
     );
}
 
export default Input;