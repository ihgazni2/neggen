> print(layouts[1024])
rm4@8@11@14@15.tem
-------------
|       |   |
-----   -----
|       |   |
-   -   -----
|   |   |   |
-------------
undefined



const fs = require("fs")
const clslmat = require("./lmat")
const clsdesc = require("../desc/desc.js")
const clscmmn = require("./cmmn")
const clspt = require("./pt")

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



const fs = require("fs")
const clslmat = require("./lmat")
const clsdesc = require("../desc/desc.js")
const clscmmn = require("./cmmn")
const clspt = require("./pt")
layouts = getAll3X3Layouts()
nlayouts = rmDuplicated(layouts)
Object.keys(nlayouts).length
console.log(Object.keys(nlayouts)[1441])
console.log(nlayouts[Object.keys(nlayouts)[1441]])

rm4@7@9@12@14@16@18@19.tem


> console.log(Object.keys(nlayouts)[1441])
-------------
|           |
-   -----   -
|   |   |   |
-   -----   -
|           |
-------------




> console.log(Object.keys(nlayouts)[1438])
-------------
|   |   |   |
-   -   -   -
|   |   |   |
-   -----   -
|           |
-------------


> nlayouts[Object.keys(nlayouts)[1441]]
[ 'rm4@5@7@9@14@16@18@19.tem' ]
>

lmat = new clslmat.Lmat()
lmat.initLayOutMat()
combo = [4,5,7,9,14,16,18,19]
lmat.rm({segs:combo})


> lmat.rm({segs:combo})
-------------
|           |
-   -----   -
|   |   |   |
-   -----   -
|           |
-------------
undefined
> rmNoRecIPTs(lmat)
undefined
> lmat.creatLayout()
-------------
|           |
-       -   -
|           |
-   -       -
|           |
-------------
undefined


lmat = new clslmat.Lmat()
lmat.initLayOutMat()
lmat.rm({segs:combo})
console.log(lmat.layout)
rmNoRecIPTs(lmat)
console.log(lmat.layout)




> console.log(Object.keys(nlayouts)[200])
-------------
|   |       |
-   ---------
|   |       |
-----       -
|           |
-------------
undefined
>

console.log(Object.keys(nlayouts)[200])
> console.log(nlayouts[Object.keys(nlayouts)[200]])
[ 'rm5@7@16@18@19.tem' ]


lmat = new clslmat.Lmat()
lmat.initLayOutMat()
combo = [5,7,16,18,19]
lmat.rm({segs:combo})
console.log(lmat.layout)

> console.log(lmat.layout)
-------------
|   |       |
-   ---------
|   |   |   |
---------   -
|           |
-------------
undefined
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
>
> rmNoRecIPTs(lmat)
undefined
> console.log(lmat.layout)
-------------
|   |       |
-   ---------
|   |       |
-----       -
|           |
-------------
undefined
>

