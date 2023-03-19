import React from "react";

const Context =  React.createContext({
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
    mapTable:[], 
    setMapTable: () => {},
    rowUpdate: "", 
    setRowUpdate: () => {}
})
export default Context;