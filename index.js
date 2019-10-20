  
const server = require('./api/server')

const port = 8000

server.listen(port, () => {
    console.log(`\n === Server running on port ${port} === \n`)
})