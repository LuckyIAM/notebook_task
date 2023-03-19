import React from "react";
import Table from "../modules/Table";
import Event from "../modules/Event";
import {Container, Row, Col } from "react-bootstrap"

export default () => {
    
    return <div className="shedule-draw" >
        <Container>
            <Row>
                <Col md={12} xs={12} >
                    <Table/>
                </Col>
                <Col md={12} xs={12} >
                    <Event/>
                </Col>
            </Row>
        </Container>
        
        </div>
}