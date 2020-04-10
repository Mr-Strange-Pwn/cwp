import React ,{useState, useEffect}from 'react';
import queryString from 'query-string'
import io from "socket.io-client"

import InfoBar from '../infoBar/infoBar'
import Input from '../input/input'
import Messages from '../messages/messages'
import TextContainer from '../textcontainer/textcontainer'

import './chat.css'

let socket ;


const Chat = () => {
    const [name, setName] = useState("");
    const [room , setRoom] = useState("");
    const [users , setUsers] =useState("");
    const ENDPOINT =  "https://react-chat-app-pwn.herokuapp.com/";
    const [message , setMessage] =useState("");
    const [messages , setMessages] =useState([]);


    useEffect(()=>{
        const {name,room} = queryString.parse(window.location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        
        socket.emit('join', { name, room }, (error) => {
            if(error) {
              alert(error);
            }})
        
        return ()=>{
            socket.emit('disconnect');
            socket.off();
       }
       
    },[ENDPOINT ])

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages , message]);
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    },[messages , users]);

    const sendMessage =(e)=>{
        e.preventDefault()


        if(message){
            socket.emit('sendMessage', message, ()=>setMessage(""))
        }
    }
     

    return ( 
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div> 
            <TextContainer users={users}/>
        </div>
    );
}
 
export default Chat;