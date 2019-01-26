const fs = require("fs")
const clsdesc = require("../desc/desc.js")
const clscmmn = require("./cmmn")
const process = require("process")
const elel = require("elist")
const path = require("path")

function getTemJsonDir() {
    let dir = path.dirname(require.resolve('neggen'))
    return(path.join(dir,"tmplt","tem3x3.json"))
}

//
let TEM3X3LAYOUTS

try {
    TEM3X3LAYOUTS = JSON.parse(fs.readFileSync(getTemJsonDir()))
} catch (err) {
    TEM3X3LAYOUTS = JSON.parse(fs.readFileSync("./tem3x3.json"))
} finally {

}
//

function showSegNum() {
    clsdesc.segNum()
}

function printLayoutViaName(name,mode) {
    if(mode===undefined) {mode="z"}
    let entries = Object.entries(TEM3X3LAYOUTS)
    for(let entry of entries) {
	let nl;
	if(mode === "z") { nl = [entry[1].zn]} else {nl = entry[1].rmnl}
        if(nl.includes(name)) {
            console.log(entry[1].printn)
        } 
    }
}

function printLayoutViaNum(num) {
    let entries = Object.entries(TEM3X3LAYOUTS)
    let entry = entries[num]
    console.log(entry[1].printn)
}


function printNames(layout) {
    console.log(TEM3X3LAYOUTS[layout].rmnl)
    console.log(TEM3X3LAYOUTS[layout].zn)
}

function lookOneByOne(from,to,interval,mode) {
    if(mode===undefined) {mode="z"}
    let entries = Object.entries(TEM3X3LAYOUTS)
    let lngth = entries.length
    if(from === undefined) {from = 0}
    if(to === undefined) {to = lngth}
    if(interval === undefined) {interval = 2000} else {interval = 1000 * interval}
    let entry = entries[from];
    console.log("\n"+entry[1].printn)
    let n;
    if(mode === "z") { n = entry[1].zn} else {n = entry[1].rmnl[0]}
    console.log(n)    
    let count = from + 1
    function animate() {
        let tmout = setTimeout(
            function(){
                let entry = entries[count]
		console.log("\n"+entry[1].printn)
		if(mode === "z") { n = entry[1].zn} else {n = entry[1].rmnl[0]}
		console.log(n)
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

function getLayoutWidth() {
    return(Object.keys(TEM3X3LAYOUTS)[0].split("\n")[0].length)
}

function getBlkNumsInOneRow(width) {
    return((process.stdout.columns - process.stdout.columns % (width+2)) / (width+2))
}

function getKPages() {
    let keys = Object.keys(TEM3X3LAYOUTS)
    let total = keys.length
    let width = getLayoutWidth()
    let blkn = getBlkNumsInOneRow(width)
    let kpages = []
    let c = 0
    while(c<total){
        let kpage = keys.slice(c,c+blkn)
        kpages.push(kpage)
        c = c  + blkn
    }
    return(kpages)
}

function fmtName(name) {
    let width = getLayoutWidth()
    let segs = []
    let c = 0
    while(c<name.length){
        let seg = name.slice(c,c+width)
        segs.push(seg)
        c = c  + width
    }
    segs[segs.length-1] = segs[segs.length-1].padEnd(width," ")
    return(segs.join("\n"))
}


function getPrintEntry(entry,mode) {
    if(mode===undefined) {mode="z"}
    let name;
    if(mode === "z") { name = entry.zn} else {name = entry.rmnl[0]}
    name = fmtName(name)
    let s = entry.printn + "\n" + name
    let arr = s.split("\n")
    return(arr)
}


function paddingPrintEntry(arr,maxLngth) {
    let width = getLayoutWidth()
    for(let i = 0;i<maxLngth-arr.length;i++) {
        arr.push(" ".repeat(width))
    }
    return(arr)
}


function printOnePage(kpage,mode) {
    let entries = []
    let maxLngth = 0
    for(let i =0;i<kpage.length;i++) {
        let entry = TEM3X3LAYOUTS[kpage[i]]
        let arr = getPrintEntry(entry,mode)
        entries.push(arr)
        let lngth = arr.length
        if(lngth>maxLngth){maxLngth = lngth}
    }
    for(let i =0;i<entries.length;i++) {
        entries[i] = paddingPrintEntry(entries[i],maxLngth)
        entries[i] = entries[i].map((s)=>(s+"  "))
    }
    entries = elel.transpose(entries)
    let s = entries.map((arr)=>(arr.join(""))).join("\n")
    console.log(s)
}


function lookAll(from,to,mode) {
    let entries = Object.entries(TEM3X3LAYOUTS)
    let lngth = entries.length
    if(from === undefined) {from = 0}
    if(to === undefined) {to = lngth}
    let kpages = getKPages()
    kpages.forEach((ele)=>{return(printOnePage(ele,mode))})
}


module.exports = {
    showSegNum:showSegNum,
    printLayoutViaName:printLayoutViaName,
    printLayoutViaNum:printLayoutViaNum,
    printNames:printNames,
    lookOneByOne:lookOneByOne,
    lookAll:lookAll,
    TEM3X3LAYOUTS:TEM3X3LAYOUTS, 
}
