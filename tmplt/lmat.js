const elel = require("../elist")
const clspt = require("./pt")
const clshseg = require("./hseg")
const clsvseg = require("./vseg")
const clsz = require("./z")


function initLayOutMat() {
    let rowNums = this.rowNums
    let colNums = this.colNums
    let pt      = this.pt
    let hseg    = this.hseg
    let vseg    = this.vseg
    let z       = this.z
    let ptmd    = this.ptmd
    let zmd     = this.zmd
    let layerNums = rowNums*2 + 1
    let layerLength = colNums*2 + 1
    let lmat = elel.initMat(layerNums,layerLength,null)
    for(let r=0;r<layerNums;r++) {
        for(let c=0;c<layerLength;c++) {
            if(clspt.isPtLoc(r,c)){
                let index = clspt.rc2index(r,c,colNums)
                let name
                if(ptmd === undefined) {
                    
                } else {
                    name = ptmd[index]
                }
                lmat[r][c] = new clspt.Pt(pt,name)
            } else if(clshseg.isHsegLoc(r,c)) {
                lmat[r][c] = new clshseg.Hseg(hseg)
            } else if(clsvseg.isVsegLoc(r,c)){
                lmat[r][c] = new clsvseg.Vseg(vseg)
            } else if(clsz.isZloc(r,c)){
		let index = clsz.rc2index(r,c,colNums)
                let zname
                if(zmd === undefined) {

                } else {
                    zname = zmd[index]
                }
                lmat[r][c] = new clsz.Z(z,zname)
            } else {
                console.log(r,c,"Impossible!!")
            }
        }
    }
    this.mat = lmat
}

function creatLayout() {
    let l = this.mat.map((l)=>(Array.prototype.join.call(l.map((ele)=>(ele.value)),"")))
    this.layout = (l.join("\n"))
    //console.log(this.layout)
}




function rmOrphan() {
    let lmat     =  this.mat    
    let rowNums  =  this.rowNums    
    let colNums  =  this.colNums    
    let layerNums = rowNums*2 + 1
    let layerLength = colNums*2 + 1
    for(let r=0;r<layerNums;r++){
        for(let c=0;c<layerLength;c++) {
            if(clspt.isPtLoc(r,c)){
                if(lmat[r][c].segNums(lmat,r,c,rowNums,colNums) <=1){
                    clspt.rm(lmat,r,c,rowNums,colNums)
                } else {
                }
            } else if(clshseg.isHsegLoc(r,c)) {
                if(lmat[r][c].isOrphan(lmat,r,c,rowNums,colNums) === 0){
                    clshseg.rm(lmat,r,c,rowNums,colNums)
                } else {
                }
            } else if(clsvseg.isVsegLoc(r,c)){
                if(lmat[r][c].isOrphan(lmat,r,c,rowNums,colNums) === 0){
                    clsvseg.rm(lmat,r,c,rowNums,colNums)
                } else {
                }
            } else if(clsz.isZloc(r,c)){

            } else {
                console.log(r,c,"Impossible!!")
            }
        }
    }
}

function _rm(lmat,r,c,rowNums,colNums) {
    if(clspt.isPtLoc(r,c)){
        clspt.rm(lmat,r,c,rowNums,colNums)
    } else if(clshseg.isHsegLoc(r,c)) {
        clshseg.rm(lmat,r,c,rowNums,colNums)
    } else if(clsvseg.isVsegLoc(r,c)){
        clsvseg.rm(lmat,r,c,rowNums,colNums)
    } else if(clsz.isZloc(r,c)){
        
    } else {
        console.log(r,c,"Impossible!!")
    }
}

function rmPt(index) {
    let lmat = this.mat
    let rowNums = this.rowNums
    let colNums = this.colNums
    let tmp = clspt.index2rc(index,rowNums,colNums)
    let r = tmp[0]
    let c = tmp[1]
    _rm(lmat,r,c,rowNums,colNums)
    //for speed performance
    //this.creatLayout()
}

function rmSeg(index) {
    let lmat = this.mat
    let rowNums = this.rowNums
    let colNums = this.colNums
    let tmp
    if(clshseg.isHsegIndex(index,rowNums,colNums)){
        tmp = clshseg.index2rc(index,rowNums,colNums)
    } else if(clsvseg.isVsegIndex(index,rowNums,colNums)) {
        tmp = clsvseg.index2rc(index,rowNums,colNums)
    } else {
        console.log("Impossible!!")
        return(null)
    }
    let r = tmp[0]
    let c = tmp[1]
    _rm(lmat,r,c,rowNums,colNums)
    //for speed performance
    //this.creatLayout()
}

function Lmat(rowNums,colNums,pt,hseg,vseg,z,ptmd,zmd) {
    if(pt === undefined){pt = "-"}
    if(rowNums===undefined){rowNums = 3}
    if(colNums===undefined){colNums = 3}
    if(hseg === undefined){hseg = "---"}
    if(vseg === undefined){vseg = "|"}
    if(z === undefined){z = "   "}
    if((rowNums===3)&&(colNums===3)){
        ptmd = clspt.PT3X3MD
	zmd = clsz.Z3X3MD
    } else {
        
    }
    this.rowNums = rowNums
    this.colNums = colNums
    this.pt = pt
    this.hseg = hseg
    this.vseg = vseg
    this.z = z
    this.ptmd = ptmd
    this.zmd = zmd
}

function rm(d) {
    let pts = d.pts
    let segs = d.segs
    if(pts === undefined) {pts=[]}
    if(segs === undefined) {segs=[]}
    for(let index of pts) {
        this.rmPt(index)
    }
    for(let index of segs) {
        this.rmSeg(index)
    }
    this.rmOrphan()
    //necessary,need to optimize
    //pls refer to lmat.tst
    this.rmOrphan()
    this.rmOrphan()
    //
    this.creatLayout()
}

Lmat.prototype.initLayOutMat = initLayOutMat
Lmat.prototype.creatLayout = creatLayout
Lmat.prototype.rmOrphan = rmOrphan
Lmat.prototype.rmPt = rmPt
Lmat.prototype.rmSeg = rmSeg
Lmat.prototype.rm = rm

module.exports = {
    Lmat:Lmat
}


