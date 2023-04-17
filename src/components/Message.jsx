import React from "react";

const Message = () => {
    return (
        <div className="message">
            <div className="messageInfo">
                <img src="https://media.istockphoto.com/id/898619084/photo/attractive-handsome-man.jpg?s=612x612&w=0&k=20&c=sUGReIrzH53_UMbSUDKs1C60MdyswOic6DvOPRXZFp8="/>
                <span>Enviado agora</span>
            </div>
            <div className="messageContent">
                <p>Oie</p>
                {/* <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg"/> */}
            </div>
        </div>
    )
}

export default Message;