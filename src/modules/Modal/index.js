import React,{ useContext} from "react";
import Context from "../../Context";
import {XCircleFill} from "react-bootstrap-icons"
import "./style.css"


export default ({isActive, chengeActive}) => {
    const {eventName, setEventName} = useContext(Context);
    const {eventDate, setEventDate} = useContext(Context);
    const {eventStatus, setEventStatus} = useContext(Context)


    console.log(isActive);
    return <div className={isActive ? "box-popup active" : "box-popup"}>
        <div className="popup">
            <div className="close-popup" 
            onClick={(e) => {
                e.preventDefault();
                chengeActive(false)
                }}>
                    <XCircleFill/>
            </div>
            <div className="text">{eventStatus === "work" ? `В  периуд ${eventDate} у ${eventName} занят. Меняите даты события в зависимость от нагружености!`: `В  периуд ${eventDate} у ${eventName} отпуск отпуск нельзя изменять!`}  </div>
        </div>
    </div>
}