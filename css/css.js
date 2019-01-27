const Z3X3NAMES =  [
  "zetl",
  "zetop",
  "zetr",
  "zel",
  "zinner",
  "zer",
  "zebl",
  "zebot",
  "zebr"
]



const CSS_TEMS = {
    "container":`.container {
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
    let css = CSS_TEMS.container
    css = css.replace("@left@",config.container.left)
    css = css.replace("@top@",config.container.top)
    css = css.replace("@width@",config.container.width)
    css = css.replace("@height@",config.container.height)
    return(css)
}

function creatSubzCss(config,zn) {
    let css = CSS_TEMS.subz
    let pos = config[zn]
    css = css.replace("@subz@",zn)
    css = css.replace("@left@",pos.left)
    css = css.replace("@top@",pos.top)
    css = css.replace("@width@",pos.width)
    css = css.replace("@height@",pos.height)
    css = css.replace("@background@",pos.color)
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
        styles.container = css2inlineStyle(creatZcss(config))
    } else {
        arr.push(creatZcss(config))
    }
    for(let zn in config) {
        let cond = (Z3X3NAMES.includes(zn))
	if(cond){
            if(config.styleInline){
                styles[zn] = css2inlineStyle(creatSubzCss(config,zn))
            } else {
                arr.push(creatSubzCss(config,zn))
            }
	} else {
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
