const fs = require("fs")
const path = require('path')


const HTML_STYLE_OUT_TEM = `<html>
<head>
    <link type="text/css" rel="styleSheet"  href="./#name#.css" />
</head>
<body>
    <@z@ class="z">
@entries@
    </@z@>
</body>
</html>`


const HTML_STYLE_INLINE_TEM = `<html>
<head>
</head>
<body>
    <@z@ class="z" style="@zstyle@">
@entries@
    </@z@>
</body>
</html>`



const CLSES = [
  'zetl',
  'zetop',
  'zetr',
  'zel',
  'zinner',
  'zer',
  'zebl',
  'zebot',
  'zebr' ]


const ZNAMES = [
  '@zetl@',
  '@zetop@',
  '@zetr@',
  '@zel@',
  '@zinner@',
  '@zer@',
  '@zebl@',
  '@zebot@',
  '@zebr@' ]


function creatAttribStr(attribs) {
    if(attribs===undefined) {
        return("")
    } else {
        let s = ""
        for(let k in attribs) {
            let attrib = k + '=' +'"' + attribs[k] + '"'
            s = s + attrib +"\x20"
        }
        s = s.slice(0,-1)
        return(s)
    }
}

function creatOpenTagStr(tag,attribs,cls) {
    attribs = JSON.parse(JSON.stringify(attribs))
    attribs.class = cls
    let as = creatAttribStr(attribs)
    let s = "<"+tag+"\x20" + as
    s = s.trim()
    s = s +">"
    s = "        " + s
    return(s)
}

function creatCloseTagStr(tag) {
    let s = "        </"+tag+">"
    return(s)
}

function creatEntry(tag,attribs,cls) {
    let entry = creatOpenTagStr(tag,attribs,cls)
    entry = entry +"\n"
    entry = entry + creatCloseTagStr(tag) + "\n"
    return(entry)
}

function creatEntries(config) {
    let arr=[]
    for(let i=0;i<CLSES.length;i++) {
        let cfg = config[CLSES[i]]
        arr.push(creatEntry(cfg.tag,cfg.attribs,CLSES[i]))
    }
    let html = arr.join("") 
    html = html.trim()
    html = "        " + html
    return(html)
}



function creatHtml(config) {
    let html = ""
    if(config.styleInline){
        html = HTML_STYLE_INLINE_TEM.replace("@entries@",creatEntries(config))
	let zstyle = creatAttribStr(config.z.attribs)
	html = html.replace("@zstyle@",zstyle)
    } else {
        html = HTML_STYLE_OUT_TEM.replace("@entries@",creatEntries(config))
    }
    html = html.replace("#name#",config.name)
    html = html.replace(/@z@/g,config.container.tag)
    if(fs.existsSync(config.name)){
    } else {
	fs.mkdirSync(path.join(".",config.name))
    }

    fs.writeFileSync(path.join(".",config.name,config.name)+".html",html)
    return(html)
}

module.exports = {
    html:creatHtml
}
