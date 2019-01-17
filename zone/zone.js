
function Zone(tl,br) {
    this._tl = tl;
    this._br = br;
}

function tl() {
    return(this._tl)
}

function tr() {
    return([this._tl[0],this._br[1]])
}

function bl() {
    return([this._br[0],this._tl[1]])
}

function br() {
    return(this._br)
}

function tseg() {
    let tr = this.tr()
    let tl = this.tl()
    let ntl = [tl[0],(tl[1]+1)]
    let ntr = [tr[0],(tr[1]-1)]
    return(new Zone(ntl,ntr))
}

function lseg() {
    let bl = this.bl()
    let tl = this.tl()
    let ntl = [(tl[0]+1),tl[1]]
    let nbl = [(bl[0]-1),bl[1]]
    return(new Zone(ntl,nbl))
}

function bseg() {
    let bl = this.bl()
    let br = this.br()
    let nbl = [bl[0],(bl[1]+1)]
    let nbr = [br[0],(br[1]-1)] 
    return(new Zone(nbl,nbr))
}

function rseg() {
    let tr = this.tr()
    let br = this.br()
    let ntr = [(tr[0]+1),tr[1]]
    let nbr = [(br[0]-1),br[1]]
    return(new Zone(ntr,nbr))
}

function isPt() {
    return(this.tl().toString()===this.br().toString())
}

function isSeg() {
    if(this.isPt()){
        return(false)
    } else {
        return((this.tl().toString()===this.tr().toString())||(this.tl().toString()===this.bl().toString()))
    }
}

function isZone(){
    if(this.isPt()){
        return(false)
    } else {
        return((this.tl().toString()!==this.tr().toString())&&(this.tl().toString()!==this.bl().toString()))
    }

}

function position(pz) {
    let top = this.tl()[0] - pz.tl()[0]
    let left = this.tl()[1] - pz.tl()[1]
    let bot = pz.bl()[0] - this.bl()[0]
    let right = pz.br()[1] - this.br()[1]
    let pos = {
	top:top,
	left:left,
	bot:bot,
	right:right
    }
    return(pos)
}

Zone.prototype.tl = tl
Zone.prototype.tr = tr
Zone.prototype.bl = bl
Zone.prototype.br = br
Zone.prototype.tseg = tseg
Zone.prototype.lseg = lseg
Zone.prototype.bseg = bseg
Zone.prototype.rseg = rseg
Zone.prototype.isPt = isPt
Zone.prototype.isSeg = isSeg
Zone.prototype.isZone = isZone
Zone.prototype.position = position


function bltr2tlbr(bl,tr) {
    let tl = [tr[0],bl[1]]
    let br = [bl[0],tr[1]]
    return([tl,br])
}

function tlbr2bltr(tl,br) {
    let bl = [br[0],tl[1]]
    let tr = [tl[0],br[1]]
    return([bl,tr])
}


module.exports = {
    Zone:Zone,
    bltr2tlbr:bltr2tlbr,
    tlbr2bltr:tlbr2bltr,
}
