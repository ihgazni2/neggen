const Z3X3MD = {
    zetl    : 0,
    zel     : 3,
    zebl    : 6,
    zebot   : 7,
    zebr    : 8,
    zer     : 5,
    zetr    : 2,
    zetop   : 1,
    zinner  : 4,
    0 :  "zetl"  ,
    3 :  "zel"   ,
    6 :  "zebl"  ,
    7 :  "zebot" ,
    8 :  "zebr"  ,
    5 :  "zer"   ,
    2 :  "zetr"  ,
    1 :  "zetop" ,
    4 :  "zinner"
}



function Z(value,name) {
    this.name = name
    this.value = value
    this.length = value.length
}

//rownum in zmat
function zr(r) {
    return((r-1)/2)
}

//colnum in zmat
function zc(c) {
    return((c-1)/2)
}

//index in z 1d
function index(colNums) {
    let r = this.zr()
    let c = this.zc()
    return(r*colNums+c)
}


Z.prototype.zr = zr
Z.prototype.zc = zc
Z.prototype.index = index


function index2ZmatRc(index,colNums) {
    let c = index % colNums
    let r = (index - c) / colNums
    return([r,c])
}

// lmat rc
function index2rc(index,rowNums,colNums){
    let tmp = index2ZmatRc(index,colNums)
    let r = tmp[0] * 2 + 1
    let c = tmp[1] * 2 + 1
    return([r,c])
}

// lmat rc
function rc2index(r,c,colNums){
    r = (r-1)/2
    c = (c-1)/2
    return(colNums*r + c)
}


function isZloc(r,c) {
    return((r%2===1)&&(c%2===1))
}


module.exports = {
    Z:Z,
    index2ZmatRc:index2ZmatRc,
    index2rc:index2rc,
    rc2index:rc2index,
    isZloc:isZloc,
    Z3X3MD:Z3X3MD
}




