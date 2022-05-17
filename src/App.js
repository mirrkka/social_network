import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/MyPosts/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from './components/Login/Login';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId'element={<ProfileContainer  />} />
                        <Route path='/profile/*' element={<ProfileContainer/>} />
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
