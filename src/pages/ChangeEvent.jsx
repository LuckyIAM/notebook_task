import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {Container, Row, Col, Button} from "react-bootstrap"
import { Form } from "react-bootstrap"
import dataEvent from "../assets/dataEvent.json"

export default () => {
    const goBack = useNavigate()
    const [eventChange, setEventChange] = useState()
    const [dataUpdate, setDataUpdate] = useState()
    const [saveIndex, setSaveIndex] = useState(localStorage.getItem("index-change-event")? localStorage.getItem("index-change-event") : null)
    
    const stOldEvent = {
        fontSize: "20px",
        fontWidth: "700" 
    }


    function changeData(){ 
        dataEvent[saveIndex].start = dataUpdate.split('-')[0]
        dataEvent[saveIndex].end = dataUpdate.split('-')[1]
        goBack(-1)
    }


    useEffect(() => {
        setEventChange(() => {
            const saveEvent =JSON.parse(localStorage.getItem("change-event"))

            const result = dataEvent.filter((e, i) => {
                console.log(e.name === saveEvent.name, e.start === saveEvent.start, e.end === saveEvent.end);
                if(e.name === saveEvent.name && e.start === saveEvent.start && e.end === saveEvent.end){
                    localStorage.setItem("index-change-event", i)
                    setSaveIndex(localStorage.getItem("index-change-event")) 
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
                            {eventChange &&  <div className="old-event" style={stOldEvent}>
                                <div>{eventChange[0].name}</div>
                                <div>{`${eventChange[0].start}-${eventChange[0].end}`}</div>
                                <div>{eventChange[0].status}</div>
                                <div>{eventChange[0].tiket}</div>
                            </div>}
                    </div> 
                    <div className="container-update">
                        <Form>
                            <Form.Group>
                                <Form.Label>Изменить дату</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={dataUpdate}
                                    placeholder={'dd.mm.yyyy-dd.mm.yyyy'}
                                    onChange={e => setDataUpdate(e.target.value)}
                                /> 
                                <Button type="submit" onClick={e => {
                                    e.preventDefault()
                                    changeData()
                                }}>Изменить Дату</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>    
    </div>
}