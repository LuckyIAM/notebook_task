import React, { useContext} from "react";
import Context from "../../Context";
import "./style.css";


export default({name, date1, date2, date3, date4, date5, date6, date7}) => {
    const {eventName, setEventName} = useContext(Context);
    const {eventDate, setEventDate} = useContext(Context);
    const {eventStatus, setEventStatus} = useContext(Context);
    const {active, setActive} = useContext(Context);
    

    function checkTag(numeClass){
        const start = +eventDate.split("-")[0].split(".")[0]
        const end = +eventDate.split("-")[1].split(".")[0]
        console.log(start, end);
        let flag = false;
        for(let i = start; i <= end; i++){
            const drawTable = document.querySelector(`.cell-date${eventName}_${i}`)
            if(drawTable.classList.contains("work") || drawTable.classList.contains("vacation")){
                flag = true
            }
        }
        if(flag){
            setActive(true)
        }else{
            for(let j = start; j <= end; j++){
                const drawTable = document.querySelector(`.cell-date${eventName}_${j}`)
                drawTable.classList.add(numeClass)
            }
        }
    }

    console.log(eventStatus, active);
    function dragStartHandler(e){
        console.log('cardStart', e.target);
    }

    function dragLeaveHandler(e){

    }

    function dragLeaveHandler(e){

    }

    function dragEndHandler(e){

    }

    function dragOverHandler(e){
        e.preventDefault();
    }

    function dropHandler(e){
        e.preventDefault();
        console.log("cardDrop", e.currentTarget.children[0].innerText);
        if(e.currentTarget.children[0].innerText === eventName){
            if(eventStatus === "work"){
                checkTag("work")
            }else{
                checkTag("vacation")
            }
        }
    }

    return <div className="row"
    onDragStart={(e) => dragStartHandler(e)}
    onDragLeave={(e) => dragLeaveHandler(e)}
    onDragEnd={(e) => dragEndHandler(e)}
    onDragOver={(e) => dragOverHandler(e)}
    onDrop={(e) => dropHandler(e)}
    draggable="true">
        <div className="cell-title cell">{name}</div>
        <div className={`cell-date${name}_1 cell`} >{date1}</div>
        <div className={`cell-date${name}_2 cell`} >{date2}</div>
        <div className={`cell-date${name}_3 cell`} >{date3}</div>
        <div className={`cell-date${name}_4 cell`} >{date4}</div>
        <div className={`cell-date${name}_5 cell`} >{date5}</div>
        <div className={`cell-date${name}_6 cell`} >{date6}</div>
        <div className={`cell-date${name}_7 cell`} >{date7}</div>
    </div>
}