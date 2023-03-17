import data from './data.json' assert { type: "json" };

let table = document.querySelector(".table")
let body = document.body
const statusValue = ["work", "vacation"]
const week = ["пн","вт","ср","чт","пт","сб","вс"]
const dayOfMarch = []
let saveLast;


function generateMonth(start, end){
    for(let i = start; i < end; i++){
        dayOfMarch.push(i)
    }
    return dayOfMarch
}
generateMonth(6, 31)

// Создание Таблицы
function createTable(parent, n, number){
    for(let i = 0; i < n; i++){
        let newCell = document.createElement('div')
        newCell.innerHTML = `<b>${week[i]}</b><sub>${dayOfMarch[i]}</sub>`
        newCell.classList.add(`march_${dayOfMarch[i]}_${number}`, "draw-cell")
        parent.appendChild(newCell)
    }
}


function createRow(){
    const newRow = document.createElement("div")
    newRow.classList.add("draw-row")  
    for(let i = 0; i<data.length; i++){
        const firstCell= document.createElement("div")
        firstCell.classList.add(`first_child_${i}`, "draw-head-cell")
        firstCell.innerText = `${data[i].name}`
        newRow.appendChild(firstCell)
        createTable(newRow, 7, i)
    }
    table.appendChild(newRow)
}
createRow()

function fillTable(){
    for(let i = 0; i < data.length; i++){
        if(data[i].data_time){
            const obj = data[i].data_time
            for(let j = 0; j < obj.length; j++){
                if(obj[j].status !== statusValue[1]){
                    const start = +obj[j].start.split('.')[0]
                    const end = +obj[j].end.split('.')[0] 
                    const busyDays = end - start + 1;  
                    const nameTiket = obj[j].tiket
                    for(let q = start; q <= end; q++){                  
                        const bg = document.querySelector(`.march_${q}_${i}`)
                        console.log(bg);
                        if(bg && !bg.classList.contains(`color-green`)){ 
                            bg.classList.add("color-green")
                            const saveText = bg.innerHTML
                            bg.innerHTML = `${nameTiket}_${saveText} `
                        }else{
                            console.log("It's busy!"); //данный блок надо менять для добавление задачи
                            break;  
                        }
                    }
                }else if(obj[j].status === statusValue[1]){
                    const start = +obj[j].start.split('.')[0]
                    const end = +obj[j].end.split('.')[0] 
                    // console.log(start, end);
                    for(let q = start; q <= end; q++){                  
                        const bg = document.querySelector(`.march_${q}_${i}`)
                        // console.log(bg);
                        if(bg && !bg.classList.contains(`color-red`)){
                            bg.classList.add("color-red")
                        }else{
                            console.log("It's busy!"); //данный блок надо менять для добавление задачи
                            break; // предупреждение !!
                        }
                    }
                }
            }  
        } 
    }
}
fillTable()


