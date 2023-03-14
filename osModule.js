const os = require("os")


console.log("os.arch :- ",os.arch())
console.log("os.freemem :- ",os.freemem() /1024/1024/1024)
console.log("os.totalmem  :- ",os.totalmem() /1024/1024/1024)
console.log("os.hostname  :- ",os.hostname())
console.log("os.tmpdir  :- ",os.tmpdir())
console.log("os.type  :- ",os.type())