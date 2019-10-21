  
const server = require('./api/server')

const port = 8000

//Set Globals
// const path = require("path");
// global.dbConfig = path.resolve(__dirname + "/data/dbConfig");
server.get('/', (req,res) => {
    res.send(`<h1>Server is working</h1>`)
})
server.listen(port, () => {
    console.log(`\n === Server running on port ${port} === \n`)
})