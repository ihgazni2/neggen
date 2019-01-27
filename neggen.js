const fs = require("fs")
const path = require('path')
const css = require("./css/css")
const html = require("./html/html")
const gaia = require("./tmplt/gaia")
const tem3x3 = require("./tmplt/tem3x3.js")
const clscfg = require("./tmplt/cfg")
const cmmn = require("./tmplt/cmmn")


let config = {
    name:undefined,
    styleInline:false,
    percent:true,
    template:"1tl1t1tr1l1i1r1bl1b1br",
    container: {
        tag:"div",
	itop:1/3,
	ileft:1/3,
	iheight:1/3,
	iwidth:1/3,
        top:0,
        left:0,
        height:750,
        width:375,
	attribs:{}
    },

}


function creat() {
    if(config.styleInline) {
        let styles = css.css(config)
        for(let k in styles) {
            config[k].attribs.style = styles[k]
        }
    } else {
	if(fs.existsSync(config.name)) {
	} else {
	    fs.mkdirSync(path.join(".",config.name))
        }
        fs.writeFileSync(path.join(".",config.name,config.name)+".css",css.css(config).join("\n\n"))
    }
    html.html(config)
}


let LAYOUT_TEMS = tem3x3.TEM3X3LAYOUTS

function getAllTemNames() {
    let keys = Object.keys(LAYOUT_TEMS)
    let names = keys.map((k)=>(LAYOUT_TEMS[k].zn))
    return(names)
}

function showAllTems() {
    tem3x3.lookAll()
}

function printTem(n) {
    gaia.printLayout(LAYOUT_TEMS,n)
}

function srchTem(n) {
    gaia.srchLayout(LAYOUT_TEMS,n)
}



function getTemCfg() {
    let n = config.template
    if(config.name === undefined) {config.name = n}
    let itlspt = [config.container.itop,config.container.ileft]
    let ibrspt = [config.container.itop+config.container.iheight,config.container.ileft+config.container.iwidth]
    let height = config.container.height
    let width  = config.container.width
    let top    = config.container.top
    let left   = config.container.left
    if(config.percent) {
        itlspt = [itlspt[0]*height+top,itlspt[1]*width+left]
	ibrspt = [ibrspt[0]*height+top,ibrspt[1]*width+left]
    }
    let cfg = clscfg.getTemConfig(LAYOUT_TEMS,n,itlspt,ibrspt,height,width,top,left)
    config = cmmn.dictUpdate(config,cfg)
    return(config)
}

module.exports = {
    config:config,
    creat:creat,
    getAllTemNames:getAllTemNames,
    showAllTems:showAllTems,
    printTem:printTem,
    srchTem:srchTem,
    getTemCfg:getTemCfg,
}
