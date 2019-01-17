clslmat = require("./lmat")
clsdesc = require("../desc/desc")
clshseg = require("./hseg")
clsz = require("./z")
clspt = require("./pt")


lmat = new clslmat.Lmat()
lmat.initLayOutMat()
lmat.creatLayout()

> clsdesc.segNum()
----0-------1-------2---
|       |       |      |
3       4       5      6
|       |       |      |
----7-------8-------9---
|       |       |      |
10     11      12     13
|       |       |      |
---14------15------16---
|       |       |      |
17     18      19     20
|       |       |      |
---21------22------23---



lmat.creatLayout()
-------------
|   |   |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------

lmat.rmSeg(8)

> lmat.creatLayout()
-------------
|   |   |   |
-----   -----
|   |   |   |
-------------
|   |   |   |
-------------



> clsdesc.ptNum()
0-------1-------2------3
|       |       |      |
4-------5-------6------7
|       |       |      |
8-------9-------10-----11
|       |       |      |
12-----13-------14-----15


lmat = new clslmat.Lmat()
lmat.initLayOutMat()
> lmat.creatLayout()

-------------
|   |   |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------

lmat.rmPt(9)


> lmat.creatLayout()
-------------
|   |   |   |
-------------
|       |   |
-       -----
|       |   |
-------------



> clsdesc.segNum()
----0-------1-------2---
|       |       |      |
3       4       5      6
|       |       |      |
----7-------8-------9---
|       |       |      |
10     11      12     13
|       |       |      |
---14------15------16---
|       |       |      |
17     18      19     20
|       |       |      |
---21------22------23---
undefined
> clsdesc.ptNum()
0-------1-------2------3
|       |       |      |
4-------5-------6------7
|       |       |      |
8-------9-------10-----11
|       |       |      |
12-----13-------14-----15
undefined
> lmat.creatLayout()
-------------
|   |   |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------
undefined
>

lmat.rm({segs:[7,16]})


clslmat = require("./lmat")
clsdesc = require("../desc/desc")
clshseg = require("./hseg")
clsz = require("./z")
clspt = require("./pt")


lmat = new clslmat.Lmat()
lmat.initLayOutMat()
lmat.creatLayout()


> lmat.rm({segs:[7,16]})
-------------
|   |   |   |
-   ---------
|   |   |   |
---------   -
|   |   |   |
-------------
undefined




#about lmat rmOphan

lmat = new clslmat.Lmat()
lmat.initLayOutMat()
combo = [4,7,9,12,14,16,18,19]
lmat.rm({segs:combo})

> lmat.rm({segs:combo})
-------------
|       |   |
-   -----   -
|   |       |
-   -       -
|           |
-------------


> lmat.rmOrphan()
undefined
> lmat.creatLayout()
-------------
|       |   |
-   -----   -
|           |
-           -
|           |
-------------
undefined
>
> lmat.rmOrphan()
undefined
>
> lmat.creatLayout()
-------------
|           |
-           -
|           |
-           -
|           |
-------------
undefined


