import React, {useEffect, useState, useContext} from "react"
import Context from "../Context"
import {Container, Row, Col} from "react-bootstrap"
import { Form } from "react-bootstrap"
import dataEvent from "../assets/dataEvent.json"
import CardEvent from "../modules/CardEvent"

export default () => {
    const [eventChange, setEventChange] = useState()
    const [rowUpdate, setRowUpdate] = useState()
    
    const {mapTable, setMapTable} = useContext(Context)

    const stOldEvent = {
        fontSize: "20px",
        fontWidth: "700" 
    }
    console.log(mapTable);
    useEffect(() => {
        setEventChange(() => {
            const saveEvent =JSON.parse(localStorage.getItem("change-event"))

            const result = dataEvent.filter((e) => {
                console.log(e.name === saveEvent.name, e.start === saveEvent.start, e.end === saveEvent.end);
                if(e.name === saveEvent.name && e.start === saveEvent.start && e.end === saveEvent.end){
                    return e
                }
            })
            return result
        })

    },[])

    return <div className="container_form">
        <Container>
            <Row>
                <Col xs={12} md={12}>
                    <div className="container_old-event">
                        <h1 className="title_old-event">Событие которые вы хотите менять</h1>
                        <Row>
                            <Col xs={12} md={6}>
                                {eventChange &&  <div className="old-event" style={stOldEvent}>
                                    <div>{eventChange[0].name}</div>
                                    <div>{`${eventChange[0].start}-${eventChange[0].end}`}</div>
                                    <div>{eventChange[0].status}</div>
                                    <div>{eventChange[0].tiket}</div>
                                </div>}
                                
                            </Col>
                            <Col xs={12} md={6}></Col>
                        </Row>
                        
                    </div> 
                </Col>
            </Row>
        </Container>    
    </div>
}