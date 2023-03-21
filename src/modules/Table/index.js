import React, { useState, useEffect, useRef, useContext} from "react"
import Context from "../../Context";
import RowDraw from "../Row";


export default () =>{
    const {events, setEvents} = useContext(Context)
    const arrName = [];
    const arrRef = useRef()
    
    
    

    useEffect(() => {
        for(let j = 0; j < events.length; j++){
            if(arrName.includes(events[j].name)){
                continue
            }else{
                arrName.push(events[j].name)
            }
        }  
        localStorage.setItem("names", JSON.stringify(arrName))      
    }, [])

    
    useEffect(() => {
        arrRef.current = arrName;
    },[])

    return<div className="container-table">
        <h1>График нагрузки</h1>
        <RowDraw 
        name = {"ФИО сотрудника"}
        date1={<b>День1</b>}
        date2={<b>День2</b>}
        date3={<b>День3</b>}
        date4={<b>День4</b>}
        date5={<b>День5</b>}
        date6={<b>День6</b>}
        date7={<b>День7</b>}
        />
        {localStorage.getItem("names") && JSON.parse(localStorage.getItem("names")).map((event, i) => <RowDraw
        key={i}
        name={event}
        number={i}
        /> )}
    </div>
}