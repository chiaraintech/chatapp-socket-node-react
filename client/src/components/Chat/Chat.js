import React, {useState, useEffect} from 'react';
import queryString from 'query-string';               //to retrieve data from the URL
import io from 'socket.io-client'
                           
let socket;

const Chat = ( {location} ) => {

   const [name, setName] = useState('');
   const [room, setRoom] = useState('');
   const [message, setMessage] = useState('');
   const [messages, setMessages] = useState([]);
   const ENDPOINT = 'localhost:5000';

useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [ENDPOINT, location.search]);


  //UseEffect to handle messages.
useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])           //I spread the other messages as I can't mutate state.
    })
  }, [messages]);


const sendMessage = (e) => {
  e.preventDefault();

  if(message) {
    socket.emit('sendMessage', message, () => setMessage(''))
  }
}

console.log(message, messages)

   return (
      <div className="outerContainer">
        <div className="container">
          <input  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                  />
        </div>
      </div>
   )
}

export default Chat;