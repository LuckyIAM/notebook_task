import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from "react-router-dom";
import dataEvent from "./assets/dataEvent.json"
import Context from "./Context";
import Main from "./pages/Main";
import Modal from "./modules/Modal";


export default () =>{
    const [eventName, setEventName] = useState(localStorage.getItem("event-name") ? localStorage.getItem("event-name") : "")
    const [eventDate, setEventDate] = useState(localStorage.getItem("event-date") ? localStorage.getItem("event-date") : "")
    const [eventStatus, setEventStatus] = useState(localStorage.getItem("event-status") ? localStorage.getItem("event-status") : "")
    const [eventNumber, setEventNumber] = useState(localStorage.getItem("event-number") ? localStorage.getItem("event-number") : "")
    const [active, setActive] = useState(false)
    const [rowUpdate, setRowUpdate] = useState()
    const [events, setEvents] = useState(JSON.parse(localStorage.getItem("events")) || [])
    const [flag, changeFlag] = useState(true)

    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(dataEvent))
    },[events])
    

    
    return <Context.Provider value={{
        events: events, 
        setEvents: setEvents,
        flag: flag, 
        changeFlag: changeFlag,
        eventName: eventName, 
        setEventName: setEventName,
        eventDate: eventDate, 
        setEventDate: setEventDate,
        eventStatus: eventStatus, 
        setEventStatus: setEventStatus,
        eventNumber: eventNumber, 
        setEventNumber: setEventNumber,
        active: active, 
        setActive: setActive,
        rowUpdate: rowUpdate, 
        setRowUpdate: setRowUpdate,
        events: events, 
        setEvents: setEvents
    }}> 
    <Modal isActive={active} chengeActive={setActive}/>
    <Routes>
        <Route path="/notebook_task/" element={<Main/>}/>
    </Routes>
    </Context.Provider>
}
