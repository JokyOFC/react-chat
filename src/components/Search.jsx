import React from "react";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Search a user"/>
            </div>
            <div className="userChat">
                <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt="" placeholder="Find a user"/>
                <div className="userChatInfo">
                    <span>Kauan</span>
                </div>
            </div>
        </div>
    )
}

export default Search;