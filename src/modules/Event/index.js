import React from "react";
import CardEvent from "../CardEvent";
import dataEvent from "../../assets/dataEvent.json"
import "./style.css"

export default () => {
    
    return <div className="container-events">
        <h1 className="title">Список события</h1>
        {dataEvent && dataEvent.map((event, i) => <CardEvent
        key={i}
        number={i+1}
        date={`${event.start.split('.')[0]}.${event.start.split('.')[1]}-${event.end.split('.')[0]}.${event.end.split('.')[1]}`}
        name={event.name}
        status={event.status}
        tiket={event.tiket}
        width={`${+event.end.split('.')[0]}`-`${+event.start.split('.')[0]}`}
        text_opportunity={event.status === "work" ? "Изменить" : null}
        /> )}
    </div>
}