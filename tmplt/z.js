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


const Z3X3BG = {
    zetl:1,
    zetop:2,
    zetr:3,
    zel:4,
    zinner:5,
    zer:6,
    zebl:7,
    zebot:8,
    zebr:9
}


const Z3X3BGNUM_MD =  {
  1:"#800000",
  2:"#008000",
  3:"#808000",
  4:"#000080",
  5:"#800080",
  6:"#008080",
  7:"#C0C0C0",
  8:"#808080",
  9: "#FF0000",
  "#800000":1,
  "#008000":2,
  "#808000":3,
  "#000080":4,
  "#800080":5,
  "#008080":6,
  "#C0C0C0":7,
  "#808080":8,
  "#FF0000":9,
}

const Z3X3TEM_NAME_MD = {
    tl    : 0,
    l     : 3,
    bl    : 6,
    b   : 7,
    br    : 8,
    r     : 5,
    tr    : 2,
    t   : 1,
    i  : 4,
    0 :  "tl"  ,
    3 :  "l"   ,
    6 :  "bl"  ,
    7 :  "b" ,
    8 :  "br"  ,
    5 :  "r"   ,
    2 :  "tr"  ,
    1 :  "t" ,
    4 :  "i"
}


function Z(value,name,color) {
    this.name = name
    this.value = value
    this.color = color
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

//zindex to zmat rc

function index2ZmatRc(index,colNums) {
    let c = index % colNums
    let r = (index - c) / colNums
    return([r,c])
}

//zindex to  lmat rc
function index2rc(index,rowNums,colNums){
    let tmp = index2ZmatRc(index,colNums)
    let r = tmp[0] * 2 + 1
    let c = tmp[1] * 2 + 1
    return([r,c])
}

// lmat rc to zindex
function rc2index(r,c,colNums){
    r = (r-1)/2
    c = (c-1)/2
    return(colNums*r + c)
}


function isZloc(r,c) {
    return((r%2===1)&&(c%2===1))
}

//bg color
function getZ3X3BGviaName(name){
    return(Z3X3BG[name])
}

function getZ3X3BGviaNum(num){
    let name = Z3X3MD[num]
    return(Z3X3BG[name])
}

//zindex 
function index2lmatIndex(index,rowNums,colNums) {
    let tmp = index2rc(index,rowNums,colNums)
    let r = tmp[0]
    let c = tmp[1]
    let lindex = r * (colNums * 2 + 1) + c - 1
    return(lindex)
}

//zindex

function getCorners(index,rowNums,colNums) {
    let tmp = index2rc(index,rowNums,colNums)
    let r = tmp[0]
    let c = tmp[1]
    return({
        tl:[(r-1),(c-1)],
	tr:[(r-1),(c+1)],
	bl:[(r+1),(c-1)],
	br:[(r+1),(c+1)]
    })
}


function getZrelation(zi1,zi2,rowNums,colNums) {
    let cnrs1 = getCorners(zi1,rowNums,colNums)
    let cnrs2 = getCorners(zi2,rowNums,colNums)
    if(JSON.stringify(cnrs1.br)===JSON.stringify(cnrs2.tl)) {return("tl")}
    else if(JSON.stringify(cnrs1.bl)===JSON.stringify(cnrs2.tl)) {return("t")}
    else if(JSON.stringify(cnrs1.bl)===JSON.stringify(cnrs2.tr)) {return("tr")}
    else if(JSON.stringify(cnrs1.br)===JSON.stringify(cnrs2.bl)) {return("l")}
    else if(JSON.stringify(cnrs1.br)===JSON.stringify(cnrs2.br)) {return("i")}
    else if(JSON.stringify(cnrs1.bl)===JSON.stringify(cnrs2.br)) {return("r")}
    else if(JSON.stringify(cnrs1.tr)===JSON.stringify(cnrs2.bl)) {return("bl")}
    else if(JSON.stringify(cnrs1.tl)===JSON.stringify(cnrs2.bl)) {return("b")}
    else if(JSON.stringify(cnrs1.tl)===JSON.stringify(cnrs2.br)) {return("br")}
    else {return("apart")}
}


//


module.exports = {
    Z:Z,
    index2ZmatRc:index2ZmatRc,
    index2lmatIndex:index2lmatIndex,
    index2rc:index2rc,
    rc2index:rc2index,
    isZloc:isZloc,
    Z3X3MD:Z3X3MD,
    Z3X3BG:Z3X3BG,
    getZ3X3BGviaName:getZ3X3BGviaName,
    getZ3X3BGviaNum:getZ3X3BGviaNum,
    Z3X3TEM_NAME_MD:Z3X3TEM_NAME_MD,
    Z3X3BGNUM_MD:Z3X3BGNUM_MD,
    getCorners:getCorners,
    getZrelation:getZrelation,
}




