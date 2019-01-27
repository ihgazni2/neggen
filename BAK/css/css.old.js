const view = require("../zone/view")


const DFLT_BGCOLOR =  {
  zetl:"#800000",
  zetop:"#008000",
  zetr:"#808000",
  zel:"#000080",
  zinner:"#800080",
  zer:"#008080",
  zebl:"#C0C0C0",
  zebot:"#808080",
  zebr: "#FF0000"
}



const CSS_TEMS = {
    "z":`.z {
    position:relative;
    left:@left@px;
    top:@top@px;
    width: @width@px;
    height: @height@px;
}`,
    "subz":`.@subz@ {
    position:absolute;
    left:@left@px;
    top:@top@px;
    width: @width@px;
    height: @height@px;
    background: @background@;
}`,
}


function creatZcss(config) {
    let css = CSS_TEMS.z
    css = css.replace("@left@",config.container.left)
    css = css.replace("@top@",config.container.top)
    css = css.replace("@width@",config.container.width)
    css = css.replace("@height@",config.container.height)
    return(css)
}

function creatSubzCss(pos,zn) {
    let css = CSS_TEMS.subz
    css = css.replace("@subz@",zn)
    css = css.replace("@left@",pos.left)
    css = css.replace("@top@",pos.top)
    css = css.replace("@width@",pos.width)
    css = css.replace("@height@",pos.height)
    css = css.replace("@background@",pos.background)
    return(css)
}

function css2inlineStyle(css) {
    css = css.replace(/ /g,"")
    return(css.split("\n").slice(1,-1).join(""))
}

function creatInlineStyle(attribs) {
    if(attribs===undefined) {
        return("")
    } else {
        let s = ""
        for(let k in attribs) {
            let attrib = k + ':' + attribs[k] + ';'
            s = s + attrib
        }
        return(s)
    }
}



function creatCssPlan(config) {
    let arr = []
    let styles = {}
    if(config.styleInline){
        styles.z = css2inlineStyle(creatZcss(config))
    } else {
        arr.push(creatZcss(config))
    }
    let itlspt; 
    let ibrspt; 
    let height = config.container.height
    let width = config.container.width
    let top = config.container.top
    let left = config.container.left
    let tmp = view.tlhw2tlbr(config.zinner.top,config.zinner.left,config.zinner.height,config.zinner.width,top,left)
    itlspt = tmp[0]
    ibrspt = tmp[1]
    let vw = new view.View(itlspt,ibrspt,height,width,top,left)
    let poses = vw.positions()
    for(let zn in DFLT_BGCOLOR) {
        poses[zn]["background"] = DFLT_BGCOLOR[zn]
        pos = poses[zn]
        if(config.styleInline){
            styles[zn] = css2inlineStyle(creatSubzCss(pos,zn))
        } else {
            arr.push(creatSubzCss(pos,zn))
        }
    }
    if(config.styleInline){
        return(styles)
    } else {
        return(arr)
    }
}





module.exports = {
    css:creatCssPlan
}
