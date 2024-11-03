// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './screens/Dashboard/Dashboard.jsx';
import Discover from './screens/Discover/Discover.jsx';
import Matches from './screens/Matches/Matches.jsx';
import ProfileDetails from './screens/ProfileDetails/ProfileDetails.jsx';
import MessagesList from './screens/MessagesList/MessagesList.jsx';
import ChatConnection from './screens/ChatConnection/ChatConnection.jsx';
import Welcome from "./screens/Welcome/Welcome.jsx";
import SignUp from "./screens/Signup/SignUp.jsx";
import SignIn from "./screens/SignIn/SignIn.jsx";
import {Helmet} from "react-helmet";

const App = () => (
    <>
        <Helmet>
            <title>Nestmate</title>
        </Helmet>
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/matches" element={<Matches/>}/>
                <Route path="/profile/:id" element={<ProfileDetails/>}/>
                <Route path="/messages" element={<MessagesList/>}/>
                <Route path="/chat/:id" element={<ChatConnection/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
        </Router>
    </>
);

export default App;
