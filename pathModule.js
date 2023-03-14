const path = require("path")


console.log("path.basename :-",path.basename("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/pathModule.js"))
console.log("path.dirname :-",path.dirname("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/pathModule.js"))
console.log("path.extname :-",path.extname("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/pathModule.js"))
console.log("path.join :-",path.join("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/pathModule.js","/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/osModule.js"))
console.log("path.parse :-",path.parse("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/pathModule.js"))
console.log("path.format :-",path.format({
    root: '/',
    dir: '/Volumes/workspace1/Hardik/Js Practice/Task(10 March)',
    base: 'pathModule.js',
    ext: '.js',
    name: 'pathModule'
  }))



