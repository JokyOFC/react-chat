import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Joky chat</span>
            <div className="user">
                <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt="" />
                <span>Joky</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar;