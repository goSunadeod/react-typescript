const addTags = require("auto-add-tags")

function run(){
  const options = {
    type: "react",
    tagName: "data-xt",
    min: 0,
    max: 100000000,
    force: false,
    resultFile: "tracePoint.json",
    elementNames: ["a", "link", "route", "button"],
    eventNames:  ["click", "submit", "change"],
    dir: "src"
  }
  addTags.main(options, true)
}

run()




