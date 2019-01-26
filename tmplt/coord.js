const clsz = require("./z")
const cmmn = require("./cmmn")


function zname2color(zn) {
    let ci = clsz.Z3X3BG[zn]
    let color = clsz.Z3X3BGNUM_MD[ci]
    return(color)
}


function get3X3zcoords(itlspt,ibrspt,height,width,top,left) {
    if(top === undefined) {top=0}
    if(left === undefined) {left=0}
    let h1 = itlspt[0] - top
    let w1 = itlspt[1] - left
    let h2 = ibrspt[0] - itlspt[0]
    let w2 = ibrspt[1] - itlspt[1]
    let h3 = height - ibrspt[0]
    let w3 = width - ibrspt[1]
    let zcoords = {}
    zcoords['zetl']   = {index:0,color:zname2color("zetl"),top:top,left:left,width:w1,height:h1}
    zcoords['zetop']  = {index:1,color:zname2color("zetop"),top:top,left:left+w1,width:w2,height:h1}
    zcoords['zetr']   = {index:2,color:zname2color("zetr"),top:top,left:left+w1+w2,width:w3,height:h1}
    zcoords['zel']    = {index:3,color:zname2color("zel"),top:top+h1,left:left,width:w1,height:h2}
    zcoords['zinner'] = {index:4,color:zname2color("zinner"),top:top+h1,left:left+w1,width:w2,height:h2}
    zcoords['zer']    = {index:5,color:zname2color("zer"),top:top+h1,left:left+w1+w2,width:w3,height:h2}
    zcoords['zebl']   = {index:6,color:zname2color("zebl"),top:top+h1+h2,left:left,width:w1,height:h3}
    zcoords['zebot']  = {index:7,color:zname2color("zebot"),top:top+h1+h2,left:left+w1,width:w2,height:h3}
    zcoords['zebr']   = {index:8,color:zname2color("zebr"),top:top+h1+h2,left:left+w1+w2,width:w3,height:h3}
    return(zcoords)
}

function mergeTwo(zcoords,zn1,zn2,rowNums,colNums) {
    if(rowNums === undefined){rowNums = 3}
    if(colNums === undefined){colNums = 3}
    let d = {}
    let zi1 = zcoords[zn1].index
    let zi2 = zcoords[zn2].index
    let rl = clsz.getZrelation(zi1,zi2,rowNums,colNums)
    if(rl === "t") {
        d.name = zn1
        d.color = zcoords[zn1].color
        d.top = zcoords[zn1].top
        d.left = zcoords[zn1].left
        d.height = zcoords[zn1].height + zcoords[zn2].height
        d.width = zcoords[zn1].width
    } else if(rl === "b") {
        d.name = zn2
        d.color = zcoords[zn2].color
        d.top = zcoords[zn2].top
        d.left = zcoords[zn2].left
        d.height = zcoords[zn2].height + zcoords[zn1].height
        d.width = zcoords[zn2].width
    } else if(rl === "l") {
        d.name = zn1
        d.color = zcoords[zn1].color
        d.top = zcoords[zn1].top
        d.left = zcoords[zn1].left
        d.height = zcoords[zn1].height 
        d.width = zcoords[zn1].width + zcoords[zn2].width
    } else if(rl === "r") {
        d.name = zn2
        d.color = zcoords[zn2].color
        d.top = zcoords[zn2].top
        d.left = zcoords[zn2].left
        d.height = zcoords[zn2].height 
        d.width = zcoords[zn2].width + zcoords[zn1].width
    } else {
        console.log("Impossible!")
    }
    return(d)
}

function merge(zcoords,znarr) {
    let zf = zcoords[znarr[0]]
    let zl = zcoords[znarr[znarr.length-1]]
    let zfi = zf.index
    let zli = zl.index
    let d = {}
    d.color = zf.color
    d.top = zf.top
    d.left = zf.left
    d.height = zl.top + zl.height - zf.top
    d.width = zl.left + zl.width - zf.left
    return(d)
}

module.exports = {
    get3X3zcoords:get3X3zcoords,
    mergeTwo:mergeTwo,
    merge:merge,
}

