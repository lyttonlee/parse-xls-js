const reader = require('read-excel-file/node')
const fs = require('fs')
let filesName = ['login', 'home', 'menu', 'supervise', 'alarm', 'device', 'org', 'setting', 'logs', 'global', 'search', 'columnCheck']
const createFile = (name ,suffix, sheet) => {
  reader('SWtranslationV1.xlsx', {
    sheet
  }).then((res) => {
    // console.log(res)
    let obj = {}
    res.shift()
    res.forEach((item) => {
      // console.log(item)
      obj[item[0]] = item[3]
  
    })
    console.log(obj)
    let content = `
      const ${name} = ${JSON.stringify(obj, null , 2)}
      export default ${name}
    `
    fs.writeFile(`${name}-${suffix}.js`, content, (err, fd) => {
      console.log(err)
    })
  })
}
filesName.forEach((name, index) => {
  createFile(name, 'ru', index+1)
})
// reader('SWtranslationV1.xlsx', {
//   sheet: 2
// }).then((res) => {
//   // console.log(res)
//   let home = {}
//   res.shift()
//   res.forEach((item) => {
//     // console.log(item)
//     home[item[0]] = item[3]

//   })
//   console.log(home)
// })