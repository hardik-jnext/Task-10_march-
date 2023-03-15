// const fs = require('fs/promises')
const fs =  require('fs')
const { encode } = require('punycode')

       
            //    (File system  promise based)

 //  1.   Create directory 

// try {
//      fs.mkdir("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test/demo")
//     console.log("folder created ...")
    
// } catch (error) {
//     console.log(error)
// }


//  1.  Create directory ( if we use {recursive:true} commnand fs create  new folder  )

// try {
//     fs.mkdir("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test/demo",{recursive:true})
//    console.log("folder created ...")
   
// } catch (error) {
//    console.log(error)
// }


//2.Read content of directory

// try {
//    const records =  fs.readdir("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test")
//     console.log(records.then((result)=>{console.log(result)}))  
// } catch (error) {
//     console.log(error)
// }


//3.remove directory

// try {
//    fs.rmdir("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test/demo")
//    console.log("Removed...")

// } catch (error) {
//     console.log(error)
// }


//4. create and remove fil

// try {
//     fs.writeFile("readme.txt","hello...")
//     console.log("file created...")
// } catch (error) {
//     console.log(error)
// }


//5. Read file (with buffer)

// try {
//   let read =  fs.readFile("fake.txt")
//     console.log("Read Started...")
//     read.then((result)=> {console.log(result)})
// } catch (error) {
//     console.log(error)
// }


//5. Read file (record)
// try {
//     let read =  fs.readFile("fake.txt",{"encoding":"utf-8"})
//       console.log("Read Started...")
//       read.then((result)=> {console.log(result)})
//   } catch (error) {
//       console.log(error)
//   }


//6. Append data into file


// try {
//     fs.appendFile("fake.txt","my life...")
//     console.log("Data appended...")
// } catch (error) {
//     console.log(error)
// }


//7. Copy file

// try {
//     fs.copyFile("fake.txt","/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test/fakeCopy.txt")
//     console.log("file copy...")
// } catch (error) {
//     console.log(error)
// }


//8.Get file information

// try {
//     const record = fs.stat("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test")
//    record.then((result)=>{console.log(result)})
// } catch (error) {
//     console.log(error)
// }

  
       //(file system using call back function)


 //  1.   Create directory 

// fs.mkdir("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test",(error)=>{
// if(error) throw error
// console.log("directory created...")
// })

//  1.  Create directory ( if we use {recursive:true} commnand fs create  new folder  )


// fs.mkdir("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test",{recursive:true},(error)=>{
// if(error) throw error
// console.log("directory created...")
// })


//2.Read content of directory

// fs.readdir("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/",(error,file)=>{
//     if(error) throw error
//     console.log("file found...",file)
// })


//3.remove directory

// fs.rmdir("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test",(error)=>{
//     if(error) throw error
//     console.log("file removed...")
// })

//4. create and remove file

// fs.writeFile("fake.txt","hello...",(error)=>{
//     if(error) throw error
//      console.log("File created...")
// })



//5. Read file (with buffer)

// fs.readFile("fake.txt",(error,result)=>{
//     if(error) throw error
//      console.log("File shows...",result)
// })

//5. Read file (record)
// fs.readFile("fake.txt","utf-8",(error,result)=>{
//     if(error) throw error
//      console.log("File shows...",result)
// })


//6. Append data into file

// fs.appendFile("fake.txt","mylife",(error)=>{
// if(error)throw error
//  console.log("Data appended...")
// })


//7. Copy file

// fs.copyFile("fake.txt","/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/fakeMore.txt",(error)=>{
//     if(error)throw error
//      console.log("file copy...")
//     })
    


//8.Get file information

// fs.stat("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/fake.txt",(error,result)=>{
//         if(error)throw error
//          console.log(result)
//          console.log(result.isDirectory())
//          console.log(result.isFile())
//         })
        


           //(file system sync)



 //  1.   Create directory 

//fs.mkdirSync("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test")


//  1.  Create directory ( if we use {recursive:true} commnand fs create  new folder  )


//fs.mkdirSync("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test",{recursive:true})

//2.Read content of directory

//  let records = fs.readdirSync("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/")
// console.log(records)

//3.remove directory

//fs.rmdirSync("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/test")

//4. create and remove file

//fs.writeFileSync("fake.txt","hello...")

//5. Read file (with buffer)

// let record = fs.readFileSync("fake.txt")
// console.log(record)

//5. Read file (record)

//  let record =fs.readFileSync("fake.txt","utf-8")
//  console.log(record)


//6. Append data into file

//fs.appendFileSync("fake.txt","mylife")


//7. Copy file

//fs.copyFileSync("fake.txt","/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/fakeMore.txt")
    


//8.Get file information

//  let records = fs.statSync("/Volumes/workspace1/Hardik/Js Practice/Task(10 March)/fake.txt")          
//  console.log(records)
//  console.log(records.isFile())
//  console.log(records.isDirectory())