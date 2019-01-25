const cmmn = require("./cmmn")

const PT3X3MD = {
    etlspt:0,
    etseglspt:1,
    etsegrspt:2,
    etrspt:3,
    elsegtspt:4,
    itlspt:5,
    itrspt:6,
    ersegtspt:7,
    elsegbspt:8,
    iblspt:9,
    ibrspt:10,
    ersegbspt:11,
    eblspt:12,
    ebseglspt:13,
    ebsegrspt:14,
    ebrspt:15,
    0:"etlspt",
    1:"etseglspt",
    2:"etsegrspt",
    3:"etrspt",
    4:"elsegtspt",
    5:"itlspt",
    6:"itrspt",
    7:"ersegtspt",
    8:"elsegbspt",
    9:"iblspt",
    10:"ibrspt",
    11:"ersegbspt",
    12:"eblspt",
    13:"ebseglspt",
    14:"ebsegrspt",
    15:"ebrspt"
}

//ptmat            2d 
//ptr              pt-rownum
//ptc              pt-colnum

//ptindex          1d

function Pt(value,name,color) {
    this.name = name
    this.value = value
    this.color = color
    this.length = value.length
}



//rownum in ptmat
function ptr(r) {
    return(r/2)
}

//colnum in ptmat
function ptc(c) {
    return(c/2)
}

//index in pt 1d
function index(r,c,colNums) {
    let r = this.ptr(r)
    let c = this.ptc(c)
    return(r*(colNums+1)+c)
}

//lmat layout-mat
//r,c  in layout-mat
function lhseg(r,c) {
    if(c-1<0){
        return(null)
    } else {
        return([r,c-1])
    }
}

function tvseg(r,c) {
    if(r-1<0){
        return(null)
    } else {
         return([r-1,c])
    }
}

function rhseg(r,c,colNums) {
    if(c+1>colNums*2){
        return(null)
    } else {
        return([r,c+1])
    }
}

function bvseg(r,c,rowNums) {
    if(r+1>rowNums*2){
        return(null)
    } else {
         return([r+1,c])
    }
}

function decreaseSegNums(nums,seg) {
    if(seg===null) {
        return(nums-1)
    } else {
        if(seg.value.replace(/ /g,"").length === 0){
            return(nums-1)
        } else {
        }
    }
    return(nums)
}



function isLonelyCorner(lmat,r,c,rowNums,colNums) {
    let lhseg = this.lhseg(r,c)
    lhseg = cmmn.getLmatEleViaLoc(lmat,lhseg)
    let tvseg = this.tvseg(r,c)
    tvseg = cmmn.getLmatEleViaLoc(lmat,tvseg)
    let rhseg = this.rhseg(r,c,colNums)
    rhseg = cmmn.getLmatEleViaLoc(lmat,rhseg)
    let bvseg = this.bvseg(r,c,rowNums)
    bvseg = cmmn.getLmatEleViaLoc(lmat,bvseg)
    let conds = [
        (tvseg.value.replace(/ /g,"").length!==0)&&(lhseg.value.replace(/ /g,"").length!==0)&&(bvseg.value.replace(/ /g,"").length===0)&&(rhseg.value.replace(/ /g,"").length===0),
        (tvseg.value.replace(/ /g,"").length===0)&&(lhseg.value.replace(/ /g,"").length!==0)&&(bvseg.value.replace(/ /g,"").length!==0)&&(rhseg.value.replace(/ /g,"").length===0),
        (tvseg.value.replace(/ /g,"").length===0)&&(lhseg.value.replace(/ /g,"").length===0)&&(bvseg.value.replace(/ /g,"").length!==0)&&(rhseg.value.replace(/ /g,"").length!==0),
        (tvseg.value.replace(/ /g,"").length!==0)&&(lhseg.value.replace(/ /g,"").length===0)&&(bvseg.value.replace(/ /g,"").length===0)&&(rhseg.value.replace(/ /g,"").length!==0),
    ]
    if(conds[0]||conds[1]||conds[2]||conds[3]){
	return(true)
    } else {
        return(false)
    }

}


function segNums(lmat,r,c,rowNums,colNums) {
    let lhseg = this.lhseg(r,c)
    lhseg = cmmn.getLmatEleViaLoc(lmat,lhseg)
    let tvseg = this.tvseg(r,c)
    tvseg = cmmn.getLmatEleViaLoc(lmat,tvseg)
    let rhseg = this.rhseg(r,c,colNums)
    rhseg = cmmn.getLmatEleViaLoc(lmat,rhseg)
    let bvseg = this.bvseg(r,c,rowNums)
    bvseg = cmmn.getLmatEleViaLoc(lmat,bvseg)
    let nums = 4
    nums = decreaseSegNums(nums,lhseg)
    nums = decreaseSegNums(nums,tvseg)
    nums = decreaseSegNums(nums,rhseg)
    nums = decreaseSegNums(nums,bvseg)
    return(nums)
}



Pt.prototype.ptr = ptr
Pt.prototype.ptc = ptc
Pt.prototype.index = index
Pt.prototype.lhseg = lhseg
Pt.prototype.tvseg = tvseg
Pt.prototype.rhseg = rhseg
Pt.prototype.bvseg = bvseg
Pt.prototype.segNums = segNums
Pt.prototype.isLonelyCorner = isLonelyCorner

function index2PtMatrc(index,colNums) {
    let c = index % (colNums+1)
    let r = (index - c) / (colNums +1)
    return([r,c])
}

//lmat rc 
function index2rc(index,rowNums,colNums) {
    let tmp = index2PtMatrc(index,colNums)
    let r = tmp[0] * 2
    let c = tmp[1] * 2
    return([r,c])
}

//lmat rc
function rc2index(r,c,colNums) {
    return((r/2)*(colNums+1)+(c/2))
}

function isPtLoc(r,c) {
    return((r%2===0)&&(c%2===0))
}

function rm(lmat,r,c,rowNums,colNums) {
    let pt = lmat[r][c]
    pt.value = " ".repeat(pt.value.length)
    lmat[r][c] = pt
    let lhseg = pt.lhseg(r,c)
    let tvseg = pt.tvseg(r,c)
    let rhseg = pt.rhseg(r,c,colNums)
    let bvseg = pt.bvseg(r,c,rowNums)
    if( lhseg === null) {
    } else {
        let tmpr = lhseg[0]
        let tmpc = lhseg[1]
        lmat[tmpr][tmpc].value = " ".repeat(lmat[tmpr][tmpc].value.length)
	lmat[r][c].color = lmat[tmpr][tmpc].color
    }
    if( tvseg === null) {
    } else {
        let tmpr = tvseg[0]
        let tmpc = tvseg[1]
        lmat[tmpr][tmpc].value = " ".repeat(lmat[tmpr][tmpc].value.length)
	lmat[r][c].color = lmat[tmpr][tmpc].color
    }
    if( rhseg === null) {
    } else {
        let tmpr = rhseg[0]
        let tmpc = rhseg[1]
        lmat[tmpr][tmpc].value = " ".repeat(lmat[tmpr][tmpc].value.length)
	lmat[r][c].color = lmat[tmpr][tmpc].color
    }
    if( bvseg === null) {
    } else {
        let tmpr = bvseg[0]
        let tmpc = bvseg[1]
        lmat[tmpr][tmpc].value = " ".repeat(lmat[tmpr][tmpc].value.length)
	lmat[r][c].color = lmat[tmpr][tmpc].color
    }
    
}


module.exports = {
    Pt:Pt,
    index2PtMatrc:index2PtMatrc,
    index2rc:index2rc,
    rc2index:rc2index,
    PT3X3MD:PT3X3MD,
    isPtLoc:isPtLoc,
    rm:rm,
    segNums:segNums,
}




