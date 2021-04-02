const elel = require("../elist")

function getLmatEleViaLoc(lmat,loc) {
    if(loc === null) {
        return(null)
    } else {
        return(lmat[loc[0]][loc[1]])
    }
}


// general but slow
// [],[0,1,2,3]

// [0],--[1,2,3]
    // [0,1],--[2,3]
        // [0,1,2],--[]
        // [0,1,3],--[]
    // [0,2],--[3]
       // [0,2,3],..[]
    // [0,3],--[]
// [1],--[2,3]
    // [1,2],--[3]
        // [1,2,3],--[]
    // [1,3],--[]
// [2],--[3]
    // [2,3].--[]
// [3],--[]


// unhandled = [
    // {h:[],t:[0,1,2,3]}
// ]


function initUnhandled(arr) {
    arr = arr.sort(function(a, b){
        return(a-b);
    });
    return([{h:[],t:arr}])
}

function getTail(head,arr) {
    let index = arr.indexOf(head[head.length-1]) + 1
    return(arr.slice(index))
}

function getUnhandledEleChildren(ele,arr) {
    let car = ele.h
    let cdr = ele.t
    let children = []
    for(let i=0;i<cdr.length;i++){
        let h = Array.prototype.concat(car,cdr[i])
        let t = getTail(h,arr)
        let child = {h:h,t:t}
        children.push(child)
    }
    return(children)
}


function getChildren(unhandled,arr) {
    let next_unhandled = []
    for(let i=0;i<unhandled.length;i++) {
        let ele = unhandled[i]
        children = getUnhandledEleChildren(ele,arr)
        next_unhandled = Array.prototype.concat(next_unhandled,children)
    }
    return(next_unhandled)
}

function getComboArrFromHandled(handled){
    return(handled.map((ele)=>(ele.h)))
}

function getAllCombos(arr) {
    let rslts =[]
    let unhandled = initUnhandled(arr)
    while(unhandled.length>0) {
        rslts = Array.prototype.concat(rslts,getComboArrFromHandled(unhandled))
        unhandled = getChildren(unhandled,arr)
    }
    return(rslts)
}

function * combination(arr) {
    let unhandled = initUnhandled(arr)
    while(unhandled.length>0) {
        let rslts = getComboArrFromHandled(unhandled)
        for(let i=0;i<rslts.length;i++){
            yield(rslts[i])
        }
        unhandled = getChildren(unhandled,arr)
    }
}

//fast method, use this later

function toBitList(n,lngth) {
    let s = n.toString(2)
    s = "0".repeat(lngth-s.length) + s
    return(s.split("").map((ele)=>(parseInt(ele))))
}


function * combination2(arr) {
    for(let n=0;n<2**arr.length;n++){
        let bl = toBitList(n,arr.length)
        let combo = elel.slctvI(arr,(i,bl)=>(bl[i]===1),[bl])
        yield(combo)
    }
}
//


//https://en.wikipedia.org/wiki/Steinhaus%E2%80%93Johnson%E2%80%93Trotter_algorithm
//https://stackoverflow.com/questions/34013675/permutations-without-recursive-function-call
//(firstElIndex * 3!) + (secondElIndex * 2!) + (thirdElIndex * 1!) + (fourthElIndex * 0!)

function * permutation(arr) {
  if (arr.length < 2) {
    return(arr.slice());
  }
  let factorial = [1];
  for (let i = 1; i <= arr.length; i++) {
    factorial.push(factorial[factorial.length - 1] * i);
  }
  let allPerms = [];
  for (let permNumber = 0; permNumber < factorial[factorial.length - 1]; permNumber++) {
    let unused = arr.slice();
    let nextPerm = [];
    while (unused.length) {
      let nextIndex = Math.floor((permNumber % factorial[unused.length]) / factorial[unused.length - 1]);
      nextPerm.push(unused[nextIndex]);
      unused.splice(nextIndex, 1);
    }
    yield(nextPerm);
  }
}
//

//
function dictMapv(d,map_func,map_func_args) {
    if(map_func_args === undefined) {
        map_func_args = []
    } else {
	
    }
    let nd = {}
    for(let k in d) {
        let v = map_func(d[k],...map_func_args)
	nd[k] = v
    }
    return(nd)
}


function dictMirror(d) {
    let nd = {}
    for(let k in d) {
        nd[d[k]] = k
    }
    return(nd)
}

function dictUpdate(d1, d2) {
  for (let k in d2) {
    d1[k] = d2[k]
  }
  return (d1)
}

module.exports = {
    getLmatEleViaLoc:getLmatEleViaLoc,
    combination:combination,
    dictMapv:dictMapv,
    dictMirror:dictMirror,
    dictUpdate:dictUpdate,
}
