import React,{ useContext, useState, useEffect } from "react";
import Context from "../../Context";
import dataEvent from "../../assets/dataEvent.json"
import "./style.css"


export default ({number, date, name, status, tiket, single_change, single_adopt}) => {
    const {events, setEvents} = useContext(Context);
    const {flag, changeFlag} = useContext(Context)
    const {eventName, setEventName} = useContext(Context);
    const {eventDate, setEventDate} = useContext(Context);
    const {eventStatus, setEventStatus} = useContext(Context);
    const {eventNumber, setEventNumber} = useContext(Context);
    const [nameTag, setNameTag] = useState("div")
    const [updDate, setUpdDate] = useState(date)

    const stWidth = {
        width: innerWidth < 650 ? "443px" : "598px",
    }

    const stBg = {
        visibility: status === "work" ? "visible" : "hidden",
        
    }

    function handler(){
        for(let i = 0; i < events.length;  i++){
            if(events[i].start === `${date.split('-')[0]}.2023` &&
            events[i].end === `${date.split('-')[1]}.2023` &&
            events[i].name === name){
                
                events[i].start = `${updDate.split('-')[0]}.2023`
                events[i].end = `${updDate.split('-')[1]}.2023`
                console.log(events[i]);
            }
            localStorage.setItem("events", JSON.stringify(events))
            dataEvent=events
            window.location.reload()
            JSON.stringify(dataEvent)
            console.log(events); 
        }

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


    function dragEndHandler(e){
        
    }

    function dragOverHandler(e){

    }


    function dropHandler(e){
        console.log("cardDrop", e.currentTarget);
        console.log("end");
        
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
                {nameTag === "div" ? <div className="event-period">{date}</div>
                : <input type="text" value={updDate} onChange={(e) => setUpdDate(e.target.value)}/>}
                
                <div className="name">{name}</div>
            </div>
            <div className="divide-container__data-event-botton padding">
                <div className="status">{status}</div>
                <div className="tiket">{tiket}</div>
            </div>
        </div>
        <button style={stBg} onClick={e => {
            e.preventDefault();
            setNameTag("input")
            }}>
            {single_change}
        </button>
        <button style={stBg}
        onClick={e => {
            e.preventDefault()
            handler()
            setNameTag("div")
        }}>{single_adopt}</button>
    </div>
}