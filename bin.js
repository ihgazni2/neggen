#!/usr/bin/env node
const yargs = require('yargs')
let opts = yargs.argv
let mode  = opts.mode

if(mode === "creat") {
    const neggen = require("./neggen.js")
    if("name" in opts) {neggen.config.name = opts.name}
    if("height" in opts) {neggen.config.container.height = opts.height}
    if("width" in opts) {neggen.config.container.width = opts.width}
    if("itop" in opts) {neggen.config.zinner.top = opts.itop}
    if("ileft" in opts) {neggen.config.zinner.left = opts.ileft}
    if("iheight" in opts) {neggen.config.zinner.height = opts.iheight}
    if("iwidth" in opts) {neggen.config.zinner.width = opts.iwidth}
    neggen.creat()
}

if(mode === "allTems") {
    const tem3x3 = require("./tmplt/tem3x3.js")
    tem3x3.lookAll()
}

if(mode === "srchTem") {
    const neggen = require("./neggen.js")
    neggen.srchTem(opts.str)
}

