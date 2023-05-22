import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Joky Chat</span>
            <div className="user">
                <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt="" />
                <span>Joky</span>
                <button onClick={()=>signOut(auth)}>logout</button>
            </div>
        </div>
    )
}

export default Navbar;