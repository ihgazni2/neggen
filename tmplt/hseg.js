//hsegmat            2d 
//hsegr              hseg-rownum
//hsegc              hseg-colnum

//hsegindex          1d

function Hseg(value,name) {
    this.name = name
    this.value = value
    this.length = value.length
}


//rownum in hsegmat
function hsegr(r) {
    return(r/2)
}

//colnum in hsegmat
function hsegc(c) {
    return((c-1)/2)
}

//index in hseg 1d
function index(r,c,colNums) {
    let r = this.hsegr(r)
    let c = this.hsegc(c)
    let offset = (colNums+colNums+1) * r
    index = offset + c
    return(index)
}

//lmat layout-mat
//r,c  in layout-mat
function lpt(r,c) {
    if(c-1<0){
        return(null)
    } else {
        return([r,c-1])
    }
}



function rpt(r,c,colNums) {
    if(c+1>colNums*2){
        return(null)
    } else {
        return([r,c+1])
    }
}

function isOrphan(lmat,r,c,rowNums,colNums) {
    let lpt = this.lpt(r,c)
    lpt = lmat[lpt[0]][lpt[1]]
    let rpt = this.rpt(r,c,colNums)
    rpt = lmat[rpt[0]][rpt[1]]
    return((lpt.segNums(lmat,r,c,rowNums,colNums)===1)&&(rpt.segNums(lmat,r,c,rowNums,colNums)===1))    
}

Hseg.prototype.hsegr = hsegr
Hseg.prototype.hsegc = hsegc
Hseg.prototype.index = index
Hseg.prototype.lpt = lpt
Hseg.prototype.rpt = rpt
Hseg.prototype.isOrphan = isOrphan

function rm(lmat,r,c,rowNums,colNums) {
    let hseg = lmat[r][c]
    hseg.value = " ".repeat(hseg.value.length)
    lmat[r][c] = hseg
}



function index2hsegMatRc(index,colNums) {
    let q = colNums+colNums+1
    let c =  index % q
    let r =  (index - c) / q
    return([r,c])
}


//rc lmat rc
function index2rc(index,rowNums,colNums) {
    let tmp = index2hsegMatRc(index,colNums)
    let r = tmp[0]*2
    let c = tmp[1]*2 + 1
    return([r,c])
}

function isHsegLoc(r,c) {
    return((r%2===0)&&(c%2===1))
}

function isHsegIndex(index,rowNums,colNums) {
    let q = colNums+colNums+1
    let reminder =  index % q
    return(reminder<colNums)
}

module.exports = {
    Hseg:Hseg,
    index2hsegMatRc:index2hsegMatRc,
    index2rc:index2rc,
    isHsegLoc:isHsegLoc,
    rm:rm,
    isHsegIndex:isHsegIndex,
}




