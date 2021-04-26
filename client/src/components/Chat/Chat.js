import React, {useState, useEffect} from 'react';
import queryString from 'query-string';               //to retrieve data from the URL
import io from 'socket.io-client'
                           

const Chat = ( {location} ) => {

   useEffect(() => {
      const {name, room} = queryString.parse(location.search)             //location comes from react-router and gives us a prop of location. We get a URL back.
      console.log(name, room)
   });

   return (
      <h1>Chat</h1>
   )
}

export default Chat;