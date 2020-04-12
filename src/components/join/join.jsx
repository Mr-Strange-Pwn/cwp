import React ,{ useState }from 'react';
import {Link} from 'react-router-dom'

import './join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState(''); 

    return ( 
    <React.Fragment>
       
        <div className="joinOuterContainer">
           
           <div className="joinInnerContainer">
                <h1 className="heading">join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(e)=>setName(e.target.value)} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(e)=>setRoom(e.target.value)} /></div>
                <Link onClick={e=> (!name || !room)? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20">Sign-in</button>
                </Link>
                <div className="infoContainer">
                <p> - its just a simple realtime chat app <br/>click hear to know about me ..
                <button className="button mt-20" onClick={()=>window.open("https://pawan-tiwari.imfast.io")}><span role="img" aria-label="emoji">👷</span></button> </p>
            </div>
            </div>
        </div>
    </React.Fragment>
     );
}
 
export default Join;