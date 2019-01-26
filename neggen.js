const fs = require("fs")
const path = require('path')
const css = require("./css/css")
const html = require("./html/html")
const gaia = require("./tmplt/gaia")

let config = {
    name:"@",
    styleInline:false,
    container: {
        tag:"div",
        height:750,
        width:375,
        top:0,
        left:0
    },
    zinner: {
        tag:"button",
        height:500,
        width:250,
        top:125,
        left:62.5,
        attribs:{}
    },
    zetl: {
        tag:"button",
        attribs:{}
    },
    zetop: {
        tag:"button",
        attribs:{}
    },
    zetr: {
        tag:"button",
        attribs:{}
    },
    zel: {
        tag:"button",
        attribs:{}
    },
    zer: {
        tag:"button",
        attribs:{}
    },
    zebl: {
        tag:"button",
        attribs:{}
    },
    zebot: {
        tag:"button",
        attribs:{}
    },
    zebr: {
        tag:"button",
        attribs:{}
    },
    z:{
        tag:"div",
	attribs:{}
    }
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


let LAYOUT_TEMS = gaia.getAll3X3Layouts()

function printTem(n) {
    gaia.printLayout(LAYOUT_TEMS,n)
}

function srchTem(n) {
    gaia.srchLayout(LAYOUT_TEMS,n)
}


module.exports = {
    config:config,
    creat:creat,
    printTem:printTem,
    srchTem:srchTem,
}
