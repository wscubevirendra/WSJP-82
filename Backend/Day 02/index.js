const fs = require("fs");



// fs.readFile("myFolder/index.txt", "utf-8", (err, data) => {
//     if (err) {
//         fs.writeFile("index.txt", "Hello this is my first file", (err) => {
//             if (err) {
//                 console.log("File not create")
//             } else {
//                 console.log("File created")
//             }
//         })
//     } else {
//         console.log(data)

//     }
// })

// fs.readFile("index.txt", "utf-8", (err, data) => {
//     if (!err) {
//         fs.unlink("index.txt", (err) => {
//             if (err) {
//                 console.log('file is not find')
//             } else {
//                 console.log("File Delete Successfully")
//             }
//         })
//     } else {
//         console.log("File is not find")

//     }

// })


// Folder name to be created
const folderName = 'myFolder';

// Check if folder exists, if not create it
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
  console.log('Folder created successfully!');
} else {
  console.log('Folder already exists!');
}


