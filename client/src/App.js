import React from 'react';
import { BrowserRouter as router, Route, Router } from 'react-router-dom';                                 //we could have used Redux, but this is simpler!

const App = () => {
    <Router>
        <Route path="/" exact component={Join}></Route>             //When the user first comes to the page, he will be greated by the Join component.
        <Route path="/chat" component={Chat}></Route>               //When the user inputs data, they can join the chat component
    </Router>
}