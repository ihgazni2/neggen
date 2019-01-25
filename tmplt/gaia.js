const fs = require("fs")
const clslmat = require("./lmat")
const clsdesc = require("../desc/desc.js")
const clscmmn = require("./cmmn")
const clspt = require("./pt")
const clsz = require("./z")
const SEG3X3NUM = [4,5,7,8,9,11,12,14,15,16,18,19]
const IPT3X3RC = [[ 2, 2 ],[ 2, 4 ],[ 4, 2 ],[4 ,4 ]]

function ansi256ColorControl(s,fg,bg) {
    if(fg === undefined) {fg = 255}
    if(bg === undefined) {bg = 0}
    let control = '\033[38;5;' +fg +"m" + '\033[48;5;' +bg +"m"
    let dflt =  "\033[0m"
    return(control+s+dflt)
}


function setZ3X3BGviaIndex(lmat,index) {
    let tmp = clsz.index2rc(index,lmat.rowNums,lmat.colNums)
    let r = tmp[0]
    let c = tmp[1]
    let color = clsz.getZ3X3BGviaNum(index)
    lmat.mat[r][c].color = color
    return(lmat)
}

function setZ3X3BG(lmat) {
    for(let i=0;i<9;i++){
        setZ3X3BGviaIndex(lmat,i)
    }
}


function getTemFileName(combo){
    return("rm"+combo.join("@"))
}

function getZtemName(lmat) {
    let set = new Set([])
    let d = {}
    for(let i=0;i<9;i++) {
        let tmp = clsz.index2rc(i,lmat.rowNums,lmat.colNums)
        let r = tmp[0]
        let c = tmp[1]
        let color = lmat.mat[r][c].color
        if(set.has(color)) {
            d[color].push(i)
        } else {
            set.add(color)
            d[color] = [i]
        }
    }
    let arr = []
    for(let color in d) {
        arr.push({color:color,lngth:d[color].length,zn:clsz.Z3X3TEM_NAME_MD[Math.min(...d[color])]})
    }
    arr.sort(function(a,b){
        return(b.lngth - a.lngth)
    })
    let name = ""
    for(let i=0;i<arr.length;i++){
        name = name + arr[i].lngth + arr[i].zn
    }
    return(name)
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


function paintZ(lmat) {
    for(let r=0;r<lmat.mat.length;r++){
	let layer = lmat.mat[r]
	for(let c=0;c<layer.length;c++){
	    let color = lmat.mat[r][c].color
	    if(color!== undefined){
		let value = lmat.mat[r][c].value
		lmat.mat[r][c].value = ansi256ColorControl(value,color,color)
            } else {
	    }
	}
    }
    lmat.creatLayout()
    return(lmat.layout)
}

function getOneLayout(combo) {
    let lmat = new clslmat.Lmat()
    lmat.initLayOutMat()
    setZ3X3BG(lmat)
    lmat.rm({segs:combo})
    let zn = getZtemName(lmat)
    if(haveLonelyCornerIpt(lmat)) {
        return(null)
    } else {
        let n = lmat.layout
	//
	let printn = paintZ(lmat)
	//
        let d = {}
        d[n] = { 
	    rmnl:[getTemFileName(combo)],
	    zn:zn,
	    printn:printn
	}
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
            nlayouts[k] = v
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

function printLayoutViaNum(nlayouts,num) {
    let layouts = Object.keys(nlayouts)
    console.log(layouts[num]) 
}




//console.log(Object.keys(nlayouts)[3])
function saveAll3X3Layouts() {
    let layouts = getAll3X3Layouts()
    let nlayouts = rmDuplicated(layouts)
    let s = JSON.stringify(nlayouts)
    fs.writeFileSync("tem3x3.json",s)
}


module.exports = {
    getAll3X3Layouts:getAll3X3Layouts,
    rmDuplicated:rmDuplicated,
    saveAll3X3Layouts:saveAll3X3Layouts,
    printLayoutViaNum:printLayoutViaNum,
    setZ3X3BG:setZ3X3BG
}
