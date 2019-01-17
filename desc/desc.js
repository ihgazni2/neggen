const ZName = `|-------------------------------------------|
|     zetl      |   zetop   |     zetr      |
|-------------------------------------------|
|               |           |               |
|     zel       |   zinner  |     zer       |
|               |           |               |
|-------------------------------------------|
|     zebl      |   zebot   |    zebr       |
|-------------------------------------------|`

function zoneName() {
    console.log(ZName)
}

const ZNum = `---------------------------------------------
|     0         |    1      |      2        |
---------------------------------------------
|               |           |               |
|     3         |    4      |       5       |
|               |           |               |
---------------------------------------------
|      6        |    7      |       8       |
---------------------------------------------`

function zoneNum() {
    console.log(ZNum)
}


const PTName =`etlspt----------etseglspt---etsegrspt-------etrspt
   |     zetl      |   zetop   |     zetr      |
elsegtspt---------itlspt-------itrspt---------ersegtspt
   |               |           |               |
   |     zel       |   zinner  |     zer       |
   |               |           |               |
elsegbspt--------iblspt-------ibrspt----------ersegbspt
   |     zebl      |   zebot   |    zebr       |
eblspt---------ebseglspt---ebsegrspt----------ebrspt`


function ptName() {
    console.log(PTName)
}

const PTNum = `0-------1-------2------3
|       |       |      |
4-------5-------6------7
|       |       |      |
8-------9-------10-----11
|       |       |      |
12-----13-------14-----15`

function ptNum() {
    console.log(PTNum)
}


const SEGNum = `----0-------1-------2---
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
---21------22------23---`


function segNum() {
    console.log(SEGNum)
}




module.exports = {
    zoneName:zoneName,
    zoneNum:zoneNum,
    ptName:ptName,
    ptNum:ptNum,
    segNum:segNum,
}
