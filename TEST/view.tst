
var view = require("./view")

var vw = new view.View([1,1],[3,3],6,6)

> vw
View {
  _etlspt: [ 0, 0 ],
  _etrspt: [ 0, 6 ],
  _eblspt: [ 6, 0 ],
  _ebrspt: [ 6, 6 ],
  _itlspt: [ 1, 1 ],
  _ibrspt: [ 3, 3 ],
  _itrspt: [ 1, 3 ],
  _iblspt: [ 3, 1 ],
  _etseglspt: [ 0, 1 ],
  _etsegrspt: [ 0, 3 ],
  _elsegtspt: [ 1, 0 ],
  _elsegbspt: [ 3, 0 ],
  _ebseglspt: [ 6, 1 ],
  _ebsegrspt: [ 6, 3 ],
  _ersegtspt: [ 1, 6 ],
  _ersegbspt: [ 3, 6 ] }
>


> vw.
vw.__defineGetter__      vw.__defineSetter__      vw.__lookupGetter__      vw.__lookupSetter__      vw.__proto__
vw.constructor           vw.hasOwnProperty        vw.isPrototypeOf         vw.propertyIsEnumerable  vw.toLocaleString
vw.toString              vw.valueOf

vw.z                     vw.zebl                  vw.zebot                 vw.zebr                  vw.zel
vw.zer                   vw.zetl                  vw.zetop                 vw.zetr                  vw.zinner

vw._eblspt               vw._ebrspt               vw._ebseglspt            vw._ebsegrspt            vw._elsegbspt
vw._elsegtspt            vw._ersegbspt            vw._ersegtspt            vw._etlspt               vw._etrspt
vw._etseglspt            vw._etsegrspt            vw._iblspt               vw._ibrspt               vw._itlspt
vw._itrspt

> vw.z()
Zone { _tl: [ 0, 0 ], _br: [ 6, 6 ] }
> vw.zinner()
Zone { _tl: [ 1, 1 ], _br: [ 3, 3 ] }
>
> vw.zetop()
Zone { _tl: [ 0, 1 ], _br: [ 0, 3 ] }
>
>
> vw.zebl()
Zone { _tl: [ 4, 0 ], _br: [ 6, 0 ] }
>
> vw.zebot()
Zone { _tl: [ 4, 1 ], _br: [ 6, 3 ] }
> vw.zebr()
Zone { _tl: [ 4, 4 ], _br: [ 6, 6 ] }
>
> vw.zel()
Zone { _tl: [ 1, 0 ], _br: [ 3, 0 ] }
>
> vw.zer()
Zone { _tl: [ 1, 4 ], _br: [ 3, 6 ] }
>
> vw.zetl()
Zone { _tl: [ 0, 0 ], _br: [ 0, 0 ] }
> vw.zetr()
Zone { _tl: [ 0, 4 ], _br: [ 0, 6 ] }
>


> var view = require("./view")
undefined
>
> var vw = new view.View([1,1],[3,3],6,6)
undefined
>
> vw.positions()
{ zinner: { top: 1, left: 1, width: 3, height: 3 },
  zetl: { top: 0, left: 0, width: 1, height: 1 },
  zetop: { top: 0, left: 1, width: 3, height: 1 },
  zetr: { top: 0, left: 4, width: 3, height: 1 },
  zel: { top: 1, left: 0, width: 1, height: 3 },
  zer: { top: 1, left: 4, width: 3, height: 3 },
  zebl: { top: 4, left: 0, width: 1, height: 3 },
  zebot: { top: 4, left: 1, width: 3, height: 3 },
  zebr: { top: 4, left: 4, width: 3, height: 3 } }
>

