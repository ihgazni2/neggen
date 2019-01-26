const cmmn = require("./cmmn")
const clsz = require("./z.js")
const clscoord = require("./coord")
const gaia = require("./gaia")


function getTemConfig(layouts,n,itlspt,ibrspt,height,width,top,left) {
    let layout = gaia.getLayout(layouts,n)
    let zcoords = clscoord.get3X3zcoords(itlspt,ibrspt,height,width,top,left)
    let d = layout.d
    let nd = {}
    for(let k in d) {
        let znarr = d[k]
        k = clsz.Z3X3BGNUM_MD[k]
        k = cmmn.dictMirror(clsz.Z3X3BG)[k]
        nd[k] = clscoord.merge(zcoords,znarr)
	nd[k].tag = "button"
	nd[k].attribs = {}
    }
    return(nd)
}


module.exports = {
    getTemConfig:getTemConfig
}


