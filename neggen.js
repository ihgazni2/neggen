const fs = require("fs")
const path = require('path')
const css = require("./css/css")
const html = require("./html/html")
const gaia = require("./tmplt/gaia")
const tem3x3 = require("./tmplt/tem3x3.js")
const clscfg = require("./tmplt/cfg")
const cmmn = require("./tmplt/cmmn")


let config = {
    name:"@",
    styleInline:false,
    percent:true,
    container: {
        tag:"div",
	itlspt:[1/3,1/3],
	ibrspt:[2/3,2/3],
        height:750,
        width:375,
        top:0,
        left:0
    },
    template:"1tl1t1tr1l1i1r1bl1b1br",

}


function creat() {
    if(config.styleInline) {
        let styles = css.css(config)
        for(var k in styles) {
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
    let itlspt = config.container.itlspt
    let ibrspt = config.container.ibrspt
    let height = config.container.height
    let width  = config.container.width
    let top    = config.container.top
    let left   = config.container.left
    if(config.container.percent) {
        itlspt = [itlspt[0]*height,itlspt[1]*width]
	ibrspt = [ibrspt[0]*height,ibrspt[1]*width]
    }
    let cfg = clscfg.getTemConfig(LAYOUT_TEMS,n,itlspt,ibrspt,height,width,top,left)
    config = cmmn.dictUpdate(config,cfg)
    return(config)
}

module.exports = {
    config:config,
    creat:creat,
    showAllTems:showAllTems,
    printTem:printTem,
    srchTem:srchTem,
    getTemCfg:getTemCfg,
}
