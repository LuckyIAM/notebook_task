import React, { useState, useEffect} from "react"
import RowDraw from "../Row";
import dataEvent from "../../assets/dataEvent.json"

export default () =>{
    const [rowUpdate, setRowUpdate] = useState()
    const [mapTable, setMapTable] = useState(localStorage.getItem("array-names") ? localStorage.getItem("array-names"): [])
    const arrName = [];
    

    useEffect(() => {
        for(let j = 0; j < dataEvent.length; j++){
            arrName.push(dataEvent[j].name)
        }
        
        setMapTable(() =>{
            for(let i = 0; i < arrName.length; i++){
                if(!mapTable.includes(arrName[i])){
                    mapTable.push(arrName[i])
                }else{
                    continue;
                }
            }
            localStorage.setItem("array-names", mapTable)
            return mapTable
        })
        setRowUpdate(()=>{
            // console.log(e.target);
        },[])
        
    }, [])

    console.log(document.body);

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
        {mapTable.split(',') ? mapTable.split(',').map((event, i) => <RowDraw
        key={i}
        name={event}
        /> ): console.log("null")}
    </div>
}