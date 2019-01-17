
//vsegmat            2d 
//vsegr              vseg-rownum
//vsegc              vseg-colnum

//vsegindex          1d

function Vseg(value,name) {
    this.name = name
    this.value = value
    this.length = value.length
}


//rownum in vsegmat
function vsegr(r) {
    return((r-1)/2)
}

//colnum in vsegmat
function vsegc(c) {
    return(c/2)
}

//index in vseg 1d
function index(r,c,colNums) {
    let r = this.vsegr(r)
    let c = this.vsegc(c)
    let start = colNums
    let offset = (colNums+colNums+1) * r
    index = start + offset + c
    return(index)
}

//lmat layout-mat
//r,c  in layout-mat
function tpt(r,c) {
    if(r-1<0){
        return(null)
    } else {
        return([r-1,c])
    }
}


function bpt(r,c,rowNums) {
    if(r+1>rowNums*2){
        return(null)
    } else {
        return([r+1,c])
    }
}


function isOrphan(lmat,r,c,rowNums,colNums) {
    let tpt = this.tpt(r,c)
    tpt = lmat[tpt[0]][tpt[1]]
    let bpt = this.bpt(r,c,rowNums)
    bpt = lmat[bpt[0]][bpt[1]]
    return((tpt.segNums(lmat,r,c,rowNums,colNums)===1)&&(bpt.segNums(lmat,r,c,rowNums,colNums)===1))
}


Vseg.prototype.vsegr = vsegr
Vseg.prototype.vsegc = vsegc
Vseg.prototype.index = index
Vseg.prototype.tpt = tpt
Vseg.prototype.bpt = bpt
Vseg.prototype.isOrphan = isOrphan

function rm(lmat,r,c,rowNums,colNums) {
    let vseg = lmat[r][c]
    vseg.value = " ".repeat(vseg.value.length)
    lmat[r][c] = vseg
}


function index2vsegMatRc(index,colNums) {
    index = index - colNums
    let q = colNums+colNums+1
    let c =  index % q
    let r =  (index - c) / q
    return([r,c])
}

//rc lmat rc
function index2rc(index,rowNums,colNums) {
    let tmp = index2vsegMatRc(index,colNums)
    let r = tmp[0] * 2 + 1
    let c = tmp[1] * 2
    return([r,c])
}



function isVsegLoc(r,c) {
    return((r%2===1)&&(c%2===0))
}

function isVsegIndex(index,rowNums,colNums) {
    let q = colNums+colNums+1
    let reminder =  index % q
    return(reminder>=colNums)
}


module.exports = {
    Vseg:Vseg,
    index2vsegMatRc:index2vsegMatRc,
    index2rc:index2rc,
    isVsegLoc:isVsegLoc,
    rm:rm,
    isVsegIndex:isVsegIndex,
}




