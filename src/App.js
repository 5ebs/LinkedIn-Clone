import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import { login, logout, selectUser } from './features/userSlice';
import Login from "./components/Login/Login";
import { auth } from './firebase';
import Widgets from "./components/Widgets/Widgets";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }
      else {
        dispatch(logout())
      }
    });
  }, [dispatch])

  return (
    <div>
      {!user ? <Login /> : (
        <div className ="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets/>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
