const zone = require("./zone")

const ZNAMES = [
  'zinner',
  'zetl',
  'zetop',
  'zetr',
  'zel',
  'zer',
  'zebl',
  'zebot',
  'zebr' ]

function View(itlspt,ibrspt,height,width,top,left) {
    if(top === undefined) {top=0}
    if(left === undefined) {left=0}
    this._etlspt = [top,left]
    this._etrspt = [top,left+width]
    this._eblspt = [top+height,left]
    this._ebrspt = [top+height,left+width]
    this._itlspt = itlspt
    this._ibrspt = ibrspt
    this._itrspt = [itlspt[0],ibrspt[1]] 
    this._iblspt = [ibrspt[0],itlspt[1]]
    this._etseglspt = [top,itlspt[1]]
    this._etsegrspt = [top,ibrspt[1]]
    this._elsegtspt = [itlspt[0],left]
    this._elsegbspt = [ibrspt[0],left]
    this._ebseglspt = [top+height,itlspt[1]]
    this._ebsegrspt = [top+height,ibrspt[1]]
    this._ersegtspt = [itlspt[0],left+width]
    this._ersegbspt = [ibrspt[0],left+width]

}

function z(){
    return(new zone.Zone(this._etlspt,this._ebrspt))
}

function zinner(){
    return(new zone.Zone(this._itlspt,this._ibrspt))
}

function zetl() {
    let nbr = [(this._itlspt[0]-1),(this._itlspt[1]-1)]
    return(new zone.Zone(this._etlspt,nbr))
}

function zetop() {
    let nbr = [(this._itrspt[0]-1),(this._itrspt[1])]
    return(new zone.Zone(this._etseglspt,nbr))
}


function zetr() {
    let ntl = [this._etsegrspt[0],(this._etsegrspt[1]+1)]
    let nbr = [(this._ersegtspt[0]-1),this._ersegtspt[1]]
    return(new zone.Zone(ntl,nbr))
}

function zel() {
    let nbr = [this._iblspt[0],(this._iblspt[1]-1)]
    return(new zone.Zone(this._elsegtspt,nbr))
}

function zer() {
    let ntl = [this._itrspt[0],(this._itrspt[1]+1)]
    let nbr = [this._ersegbspt[0],this._ersegbspt[1]]
    return(new zone.Zone(ntl,nbr))
}


function zebl() {
    let ntl = [(this._elsegbspt[0]+1),this._elsegbspt[1]]
    let nbr = [this._ebseglspt[0],(this._ebseglspt[1]-1)]
    return(new zone.Zone(ntl,nbr))
}

function zebot() {
    let ntl = [(this._iblspt[0]+1),this._iblspt[1]]
    return(new zone.Zone(ntl,this._ebsegrspt))
}


function zebr() {
    let ntl = [(this._ibrspt[0]+1),(this._ibrspt[1]+1)]
    return(new zone.Zone(ntl,this._ebrspt))
}

function _subZonePosition(vw,pz,zn) {
    let z = vw[zn]()
    let pos = z.position(pz)
    let width = z.tr()[1] - z.tl()[1] + 1 
    let height = z.bl()[0] - z.tl()[0] + 1
    delete pos.bot
    delete pos.right
    pos.width = width
    pos.height = height
    return(pos)
}



function positions() {
    let pz = this.z()
    let poses = {}
    for(let zn of ZNAMES){
        poses[zn] = _subZonePosition(this,pz,zn)
    }
    return(poses)
}

View.prototype.z        = z
View.prototype.zinner   = zinner
View.prototype.zetl     = zetl
View.prototype.zetop    = zetop
View.prototype.zetr     = zetr
View.prototype.zel      = zel
View.prototype.zer      = zer
View.prototype.zebl     = zebl
View.prototype.zebot    = zebot
View.prototype.zebr     = zebr
View.prototype.positions = positions


function subZonePosition(vw,zn) {
    let pz = vw.z()
    return(_subZonePosition(vw,pz,zn))
}

function tlhw2tlbr(top,left,height,width,ptop,pleft) {
    if(ptop === undefined) {ptop=0}
    if(pleft === undefined) {pleft=0}
    let tl = [(ptop+top-1),(pleft+left-1)]
    let br = [(tl[0]+height-1),(tl[1]+width-1)]
    return([tl,br])
}


module.exports = {
    View:View,
    ZNAMES:ZNAMES,
    subZonePosition,subZonePosition,
    tlhw2tlbr:tlhw2tlbr
}
