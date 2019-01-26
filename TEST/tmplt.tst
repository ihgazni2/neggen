var tem3x3 = require("./tem3x3")
var gaia = require("./gaia")
var layouts = gaia.getAll3X3Layouts()
var nlayouts = gaia.rmDuplicated(layouts)
var tem3x3 = require("./tem3x3")
var clslmat = require("./lmat")
var clsz = require("./z")



lmat = new clslmat.Lmat()
lmat.initLayOutMat()
gaia.setZ3X3BG(lmat)



//

var gaia = require("./gaia")
gaia.saveAll3X3Layouts()
var tem3x3 = require("./tem3x3")
tem3x3.printLayoutViaName("rm4@7@8@11.tem")
//




//
var tem3x3 = require("./tem3x3")
tem3x3.lookAll()



function test(id) {
    for(var d of ANSI256_COLORS_SHEET) {
        if(d.colorId === id) {
            console.log(d.hexString)
        }
    }
}


var gaia = require("./gaia")
var layouts = gaia.getAll3X3Layouts()
var layouts = gaia.rmDuplicated(layouts)


clsz = require("./z.js")

layout = { rmnl: [ 'rm4' ],
  zn: '2tl1tr1l1i1r1bl1b1br',
  printn: '-------------\n|\u001b[38;5;1m\u001b[48;5;1m   \u001b[0m\u001b[38;5;1m\u001b[48;5;1m \u001b[0m\u001b[38;5;1m\u001b[48;5;1m   \u001b[0m|\u001b[38;5;3m\u001b[48;5;3m   \u001b[0m|\n-------------\n|\u001b[38;5;4m\u001b[48;5;4m   \u001b[0m|\u001b[38;5;5m\u001b[48;5;5m   \u001b[0m|\u001b[38;5;6m\u001b[48;5;6m   \u001b[0m|\n-------------\n|\u001b[38;5;7m\u001b[48;5;7m   \u001b[0m|\u001b[38;5;8m\u001b[48;5;8m   \u001b[0m|\u001b[38;5;9m\u001b[48;5;9m   \u001b[0m|\n-------------',
  arr:
   [ { color: '1', lngth: 2, zn: 'tl' },
     { color: '3', lngth: 1, zn: 'tr' },
     { color: '4', lngth: 1, zn: 'l' },
     { color: '5', lngth: 1, zn: 'i' },
     { color: '6', lngth: 1, zn: 'r' },
     { color: '7', lngth: 1, zn: 'bl' },
     { color: '8', lngth: 1, zn: 'b' },
     { color: '9', lngth: 1, zn: 'br' } ],
  d:
   { '1': [ 0, 1 ],
     '3': [ 2 ],
     '4': [ 3 ],
     '5': [ 4 ],
     '6': [ 5 ],
     '7': [ 6 ],
     '8': [ 7 ],
     '9': [ 8 ] } }





//

var cmmn = require("./cmmn")
var gaia = require("./gaia")
var layouts = gaia.getAll3X3Layouts()



var layout = gaia.getLayout(layouts,20)
gaia.printLayout(layouts,20)
gaia.printLayout(layouts,"2tl2bl1tr1l1i1r1br")
gaia.printLayout(layouts,"rm4@18")





d1 = 
{ '#800000': [ 'zetl' ],
  '#008000': [ 'zetop' ],
  '#808000': [ 'zetr' ],
  '#000080': [ 'zel', 'zebl' ],
  '#800080': [ 'zinner' ],
  '#008080': [ 'zer' ],
  '#808080': [ 'zebot' ],
  '#FF0000': [ 'zebr' ] } 




clsz.Z3X3MD

#算出区域坐标
#合并区域坐标






const clsz = require("./z.js")

clsz.getZrelation(0,4,3,3)
clsz.getZrelation(1,4,3,3)
clsz.getZrelation(2,4,3,3)
clsz.getZrelation(3,4,3,3)
clsz.getZrelation(4,4,3,3)
clsz.getZrelation(5,4,3,3)
clsz.getZrelation(6,4,3,3)
clsz.getZrelation(7,4,3,3)
clsz.getZrelation(8,4,3,3)








function Coords(index,color) {
    this.index = index
    this.color = color
    this.
}

function zname2color(zn) {
    let ci = clsz.Z3X3BG[zn]
    let color = clsz.Z3X3BGNUM_MD[ci]
    return(color)
}


{ '#800000': [ 'zetl' ],
  '#008000': [ 'zetop' ],
  '#808000': [ 'zetr' ],
  '#000080': [ 'zel', 'zebl' ],
  '#800080': [ 'zinner' ],
  '#008080': [ 'zer' ],
  '#808080': [ 'zebot' ],
  '#FF0000': [ 'zebr' ] }



znarr = [ 'zetl', 'zetop', 'zetr', 'zel', 'zinner', 'zer', 'zebl', 'zebot', 'zebr' ]




//

var cmmn = require("./cmmn")
var gaia = require("./gaia")
var layouts = gaia.getAll3X3Layouts()
var layout = gaia.getLayout(layouts,20)
var clsz = require("./z.js")
var clscoord = require("./coord")

var layout = gaia.getLayout(layouts,151)
gaia.printLayout(layouts,151)


height = 750
width = 375
top = 0
left = 0
itlspt = [125,62.5]
ibrspt = [625,312.5]

var gaia = require("./gaia")
var layouts = gaia.getAll3X3Layouts()
var clscfg = require("./cfg")
clscfg.getTemConfig(layouts,n,itlspt,ibrspt,height,width,top,left)


neggen = require("./neggen")
height = 750
width = 375
top = 0
left = 0
itlspt = [125,62.5]
ibrspt = [625,312.5]
neggen.getTemCfg(151,itlspt,ibrspt,height,width,top,left)


tem3x3 = require("./tmplt/tem3x3.js")

npm install /opt/JS/NEGGEN

C:\Users\Administrator>cd C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master

C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>
C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>
C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>
C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>
C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>npm install ./



C:\Users\Administrator>cd C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master

C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>
C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>
C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>
C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>
C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>npm install ./
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN neggen@1.1.0 license should be a valid SPDX license expression

added 56 packages from 13 contributors and audited 68 packages in 143.834s
found 0 vulnerabilities


C:\Users\Administrator\Desktop\NEGGEN-2\neggen-master\neggen-master>

