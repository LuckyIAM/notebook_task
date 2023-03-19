import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from "react-router-dom";

import Context from "./Context";
import Main from "./pages/Main";
import Modal from "./modules/Modal";
import ChangeEvent from "./pages/ChangeEvent"


export default () =>{
    const [eventName, setEventName] = useState(localStorage.getItem("event-name") ? localStorage.getItem("event-name") : "")
    const [eventDate, setEventDate] = useState(localStorage.getItem("event-date") ? localStorage.getItem("event-date") : "")
    const [eventStatus, setEventStatus] = useState(localStorage.getItem("event-status") ? localStorage.getItem("event-status") : "")
    const [eventNumber, setEventNumber] = useState(localStorage.getItem("event-number") ? localStorage.getItem("event-number") : "")
    const [active, setActive] = useState(false)
    const [mapTable, setMapTable] = useState(localStorage.getItem("array-names") ? localStorage.getItem("array-names"): [])
    const [rowUpdate, setRowUpdate] = useState()


    return <Context.Provider value={{
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
        mapTable:mapTable, 
        setMapTable: setMapTable,
        rowUpdate: rowUpdate, 
        setRowUpdate: setRowUpdate
    }}> 
    <Modal isActive={active} chengeActive={setActive}/>
    <Routes>
        <Route path="/change_event" element={<ChangeEvent/>}/>
        <Route path="/" element={<Main/>}/>
    </Routes>
    </Context.Provider>
}
