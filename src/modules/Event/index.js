import React,{useContext} from "react";
import Context from "../../Context";
import CardEvent from "../CardEvent";
import { PenFill, CheckCircleFill } from "react-bootstrap-icons";
import "./style.css"

export default () => {
    const {events, setEvents} = useContext(Context)

    console.log(events);
    return <div className="container-events">
        <h1 className="title">Список события</h1>
        {events && events.map((e, i) => <CardEvent
        key={i}
        number={i+1}
        date={`${e.start.split('.')[0]}.${e.start.split('.')[1]}-${e.end.split('.')[0]}.${e.end.split('.')[1]}`}
        name={e.name}
        status={e.status}
        tiket={e.tiket}
        width={`${+e.end.split('.')[0]}`-`${+e.start.split('.')[0]}`}
        single_change={e.status === "work" ? <PenFill/> : null}
        single_adopt={e.status === "work" ? <CheckCircleFill/> : null}
        /> )}
    </div>
}