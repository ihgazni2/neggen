const fs = require("fs")
const clslmat = require("./lmat")
const clsdesc = require("../desc/desc.js")
const clscmmn = require("./cmmn")
const clspt = require("./pt")
const SEG3X3NUM = [4,5,7,8,9,11,12,14,15,16,18,19]
const IPT3X3RC = [[ 2, 2 ],[ 2, 4 ],[ 4, 2 ],[4 ,4 ]]



function getTemFileName(combo){
    return("rm"+combo.join("@")+".tem")
}


function iptIsLonelyCorner(lmat,loc){
    let ipt = clscmmn.getLmatEleViaLoc(lmat.mat,loc)
    return(ipt.isLonelyCorner(lmat.mat,loc[0],loc[1],lmat.rowNums,lmat.colNums))
}

function haveLonelyCornerIpt(lmat){
    for(let loc of IPT3X3RC) {
        if(iptIsLonelyCorner(lmat,loc)) {
            return(true)
        }
        else {
        }
    }
    return(false)
}


function getOneLayout(combo) {
    let lmat = new clslmat.Lmat()
    lmat.initLayOutMat()
    lmat.rm({segs:combo})
    if(haveLonelyCornerIpt(lmat)) {
        return(null)
    } else {
        let n = lmat.layout
        let d = {}
        d[n] = [getTemFileName(combo)]
        return(d)
    }
}



function getAll3X3Layouts() {
    let layouts = []
    let g = clscmmn.combination(SEG3X3NUM)
    for(let combo of g) {
        let layout = getOneLayout(combo)
        if(layout === null) {
        } else {
            layouts.push(layout)
        }
    }
    return(layouts)
}

function rmDuplicated(layouts) {
    let nlayouts = {}
    let set = new Set([])
    for(let i =0;i<layouts.length;i++){
        let layout = layouts[i]
        let k = Object.keys(layout)[0]
        let v = layout[k]
        if(set.has(k)) {
            nlayouts[k].push(v[0])
        } else {
            set.add(k)
            nlayouts[k] = v
        }
    }
    return(nlayouts)
}


function printLayout(layout) {
    let k = Object.keys(layout)[0]
    let v = layout[k]    
    console.log(k)
    console.log(v)
}



//console.log(Object.keys(nlayouts)[3])
function saveAll3X3Layouts() {
    let layouts = getAll3X3Layouts()
    let nlayouts = rmDuplicated(layouts)
    let s = JSON.stringify(nlayouts)
    fs.writeFileSync("tem3x3.json",s)
}


module.exports = {
    saveAll3X3Layouts:saveAll3X3Layouts
}
