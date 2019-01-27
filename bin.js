#!/usr/bin/env node
const yargs = require('yargs')
let opts = yargs.argv
let mode  = opts.mode
const neggen = require("./neggen.js")

function boolize(s) {
    s = s.toLowerCase()
    if(s === "true") {return(true)}
    else if(s === "false") {return(false)}
    else {return(undefined)}
}


if(mode === "creat") {
    if("name" in opts) {neggen.config.name = opts.name}
    if("top" in opts) {neggen.config.container.top = parseFloat(eval(opts.top))}
    if("left" in opts) {neggen.config.container.left = parseFloat(eval(opts.left))}
    if("height" in opts) {neggen.config.container.height = parseFloat(eval(opts.height))}
    if("width" in opts) {neggen.config.container.width = parseFloat(eval(opts.width))}
    if("itop" in opts) {neggen.config.container.itop = parseFloat(eval(opts.itop))}
    if("ileft" in opts) {neggen.config.container.ileft = parseFloat(eval(opts.ileft))}
    if("iheight" in opts) {neggen.config.container.iheight = parseFloat(eval(opts.iheight))}
    if("iwidth" in opts) {neggen.config.container.iwidth = parseFloat(eval(opts.iwidth))}
    if("tem" in opts) {neggen.config.template = opts.tem}
    if("styleInline" in opts) {neggen.config.styleInline = boolize(opts.styleInline)}
    if("percent" in opts) {neggen.config.percent = boolize(opts.percent)}
    neggen.getTemCfg()
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

