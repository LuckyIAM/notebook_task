import data from './data.json' assert { type: "json" };

let table = document.querySelector(".table")
let body = document.body
const statusValue = ["work", "vacation"]

// Создание Таблицы
function createTable(parent, n, number){
    for(let i = 0; i < n; i++){
        let newCell = document.createElement('div')
        newCell.innerText = `${ i + 1}`
        newCell.classList.add(`child${number}_${i}`, "draw-cell")
        parent.appendChild(newCell)
    }
}


function createRow(){
    const newRow = document.createElement("div")
    newRow.classList.add("draw-row")  
    let count = 0
    for(let i = 0; i<data.length; i++){
        count++
        const firstCell= document.createElement("div")
        firstCell.classList.add(`first_child${count}_${i}`, "draw-cell")
        firstCell.innerText = `${data[i].name}`
        newRow.appendChild(firstCell)
        createTable(newRow, 15, count)
    }
    body.appendChild(newRow)
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
                    console.log(start, end);
                    for(let q = start; q <= end; q++){                  
                        const bg = document.querySelector(`.child${i+1}_${q-1}`)
                        console.log(bg);
                        if(bg){ //&& !bg.classList.contains("color-green")
                            bg.classList.add("color-green")
                        }
                    }
                }else if(obj[j].status === statusValue[1]){
                    const start = +obj[j].start.split('.')[0]
                    const end = +obj[j].end.split('.')[0] 
                    console.log(start, end);
                    for(let q = start; q <= end; q++){                  
                        const bg = document.querySelector(`.child${i+1}_${q-1}`)
                        console.log(bg);
                        if(bg){
                            bg.classList.add("color-red")
                        }
                    }
                }
            }  
        } 
    }
}
fillTable()