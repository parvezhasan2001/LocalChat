import React, { useState, useRef } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import {Chat} from "./components/Chat";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";
import {auth} from "./firebase-config";
const cookies = new Cookies();



function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signUserOut  = async () =>{
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  if (!isAuth) {
    return (
      <div>
        <Auth  setIsAuth={setIsAuth}/>
      </div>
    );

  }
  return (
  <div className="main-div">
      {room ?  (
        <div><Chat room={room} /></div>
      ) : (
        <div className="room">
            <label >Enter Room Name:</label>
            <input ref={ roomInputRef} />
            <button onClick={() => setRoom(roomInputRef.current.value)}>
              Enter Chat 
              </button>
          </div>
        )}
        <div className="room">
              <button onClick={signUserOut}>Sign Out</button>
        </div>
    </div>
  );
}

export default App;