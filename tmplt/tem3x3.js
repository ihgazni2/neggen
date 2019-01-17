const fs = require("fs")
const clsdesc = require("../desc/desc.js")
const clscmmn = require("./cmmn")

const TEM3X3LAYOUTS = JSON.parse(fs.readFileSync("./tem3x3.json"))

function showSegNum() {
    clsdesc.segNum()
}

function printLayout(name) {
    let entries = Object.entries(TEM3X3LAYOUTS)
    for(let entry of entries) {
        if(entry[1].includes(name)) {
            console.log(entry[0])
        } 
    }
}

function printNames(layout) {
    console.log(TEM3X3LAYOUTS[layout])
}



function lookOneByOne(from,to,interval) {
    let entries = Object.entries(TEM3X3LAYOUTS)
    let lngth = entries.length
    if(from === undefined) {from = 0}
    if(to === undefined) {to = lngth}
    if(interval === undefined) {interval = 2000} else {interval = 1000 * interval}
    let entry = entries[from]
    console.log("\n"+entry[0])
    console.log(entry[1][0])    
    let count = from + 1
    function animate() {
        let tmout = setTimeout(
            function(){
                let entry = entries[count]
                console.log("\n"+entry[0])
                console.log(entry[1][0])
                if(count<to){
                    count = count + 1
                    animate()
                } else {
                    clearTimeout(tmout)
                    console.log("\n")
                }
            },
            interval
        )
    }
    animate()
}

module.exports = {
    showSegNum:showSegNum,
    printLayout:printLayout,
    printNames:printNames,
    lookOneByOne:lookOneByOne,
    
}
