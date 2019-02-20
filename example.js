//This code imports addition libraries needed to handle file writing
const fs = require("fs")
const path = require("path")

//This creates a string with the value of 'Hello World'
let textToSave = 'Hello World'

//This creates a string with the value of the current file directory plus a direct named Example
let filepath = path.join(__dirname, 'Example')

//This checks if the directory specified in filepath exists...
if (!fs.existsSync(filepath)) {
    //...and creates it if it doesn't
    fs.mkdirSync(filepath)
}

//This combines the filepath with a file named test.txt... 
let testTxt = path.join(filepath, "test.txt")

//..and then creates the file with the value from textToSave
fs.writeFileSync(testTxt, textToSave)