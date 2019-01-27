#!/usr/bin/env node
const yargs = require('yargs')
let opts = yargs.argv
let mode  = opts.mode
const neggen = require("./neggen.js")

if(mode === "creat") {
    if("name" in opts) {neggen.config.name = opts.name}
    if("top" in opts) {neggen.config.container.top = opts.top}
    if("left" in opts) {neggen.config.container.left = opts.left}
    if("height" in opts) {neggen.config.container.height = opts.height}
    if("width" in opts) {neggen.config.container.width = opts.width}
    if("itop" in opts) {neggen.config.container.itop = opts.itop}
    if("ileft" in opts) {neggen.config.container.ileft = opts.ileft}
    if("iheight" in opts) {neggen.config.container.iheight = opts.iheight}
    if("iwidth" in opts) {neggen.config.container.iwidth = opts.iwidth}
    if("tem" in opts) {neggen.template = opts.tem}
    neggen.creat()
}

if(mode === "allTems") {
    neggen.showAllTems()
}

if(mode === "srchTem") {
    neggen.srchTem(opts.str)
}

if(mode === "printTem") {
    neggen.printTem(opts.str)
}

