import React from "react";

const Context =  React.createContext({
    events: [], 
    setEvents: ()=>{},
    flag: false, 
    changeFlag: ()=>{},
    eventName: "", 
    setEventName: () => {},
    eventDate: "", 
    setEventDate: () => {},
    eventStatus: "",
    setEventStatus:() => {},
    eventNumber: "", 
    setEventNumber: () => {},
    active: false, 
    setActive: () => {},
    rowUpdate: "", 
    setRowUpdate: () => {}
})
export default Context;