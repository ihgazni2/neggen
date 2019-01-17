zone = require("./zone")
z = new zone.Zone([3,3],[5,5])
z.tl()
z.tr()
z.bl()
z.br()
z.lseg()
z.rseg()
z.tseg()
z.bseg()
z.isPt()
z.isSeg()
z.isZone()

> z.lseg()
Zone { _tl: [ 4, 3 ], _br: [ 4, 3 ] }
> z.rseg()
Zone { _tl: [ 4, 5 ], _br: [ 4, 5 ] }
> z.tseg()
Zone { _tl: [ 3, 4 ], _br: [ 3, 4 ] }
> z.bseg()
Zone { _tl: [ 5, 4 ], _br: [ 5, 4 ] }


> z.isPt()
false
> z.isSeg()
false
> z.isZone()
true

zone = require("./zone")
z = new zone.Zone([3,3],[3,3])
z.isPt()
z.isSeg()
z.isZone()

z = new zone.Zone([3,3],[3,4])
z.isPt()
z.isSeg()
z.isZone()


z = new zone.Zone([3,3],[5,3])
z.isPt()
z.isSeg()
z.isZone()


Zone { _tl: [ 3, 3 ], _br: [ 3, 3 ] }
> z.isPt()
true
> z.isSeg()
false
> z.isZone()
false
>
> z = new zone.Zone([3,3],[3,4])
Zone { _tl: [ 3, 3 ], _br: [ 3, 4 ] }
> z.isPt()
false
> z.isSeg()
true
> z.isZone()
false
>
>
> z = new zone.Zone([3,3],[5,3])
Zone { _tl: [ 3, 3 ], _br: [ 5, 3 ] }
> z.isPt()
false
> z.isSeg()
true
> z.isZone()
false
>

zone = require("./zone")
pz = new zone.Zone([0,0],[5,5])
z = new zone.Zone([1,1],[3,3])
z.position(pz)
