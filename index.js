require('dotenv').config()
const server = require('./api/server');
const config = require('./data/db-config')


const PORT = process.env.PORT || 9000 ;

server.listen(PORT, ()=> {
    console.log(`*** Server running on port ${PORT} ***`)
})

