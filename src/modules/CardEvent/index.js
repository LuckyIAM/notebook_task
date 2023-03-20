import React,{ useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context";
import "./style.css"

export default ({number, date, name, status, tiket, width, text_opportunity}) => {
    const goToChangeEvent = useNavigate()
    const {eventName, setEventName} = useContext(Context);
    const {eventDate, setEventDate} = useContext(Context);
    const {eventStatus, setEventStatus} = useContext(Context);
    const {eventNumber, setEventNumber} = useContext(Context);
    
    const stWidth = {
        width: innerWidth < 650 ? "443px" : "598px",
    }

    const stBg = {
        visibility: status === "work" ? "visible" : "hidden",
        
    }

    function dragStartHandler(e){
        console.log('cardStart', e.target.children[0].innerText);
        localStorage.setItem("event-name", e.target.children[1].children[0].children[1].innerText);
        localStorage.setItem("event-date", e.target.children[1].children[0].children[0].innerText);
        localStorage.setItem("event-status", e.target.children[1].children[1].children[0].innerText);
        localStorage.setItem("event-number", e.target.children[0].innerText);
        setEventName(localStorage.getItem("event-name"))
        setEventDate(localStorage.getItem("event-date"))
        setEventStatus(localStorage.getItem("event-status"))
        setEventNumber(localStorage.getItem("event-number"))
    }

    function dragLeaveHandler(e){

    }

    function dragLeaveHandler(e){

    }

    function dragEndHandler(e){

    }

    function dragOverHandler(e){
        e.preventDefault();
    }

    function dropHandler(e){
        console.log("cardDrop", e.currentTarget);
        if(e.currentTarget.className.name){
            console.log();
        }
    }

    return <div className="container-card-event" 
    style={stWidth}
    onDragStart={(e) => dragStartHandler(e)}
    onDragLeave={(e) => dragLeaveHandler(e)}
    onDragEnd={(e) => dragEndHandler(e)}
    onDragOver={(e) => dragOverHandler(e)}
    onDrop={(e) => dropHandler(e)}
    draggable="true"
    >
        <div className="number">{number}</div>
        <div className="data-event">
            <div className="divide-container__data-event-top padding">
                <div className="event-period">{date}</div>
                <div className="name">{name}</div>
            </div>
            <div className="divide-container__data-event-botton padding">
                <div className="status">{status}</div>
                <div className="tiket">{tiket}</div>
            </div>
        </div>
        <button style={stBg} onClick={e => {
            e.preventDefault();
            localStorage.setItem("change-event", `{"name": "${name}","start": "${date.split("-")[0]}.2023","end": "${date.split("-")[1]}.2023"}`)
            goToChangeEvent("/change_event")
            }}>
            {text_opportunity}
        </button>
    </div>
}