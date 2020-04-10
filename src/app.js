import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'

import Join from './components/join/join'
import Chat from './components/chat/chat'

const App = () => {
    return ( 
        <Router>
            <Route  exact path="/" component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
     );
}
 
export default App;