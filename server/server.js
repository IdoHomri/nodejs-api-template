const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')


// envs
dotenv.config({ path: './env/.env' })
dotenv.config({ path: '/env/.env.creds' })

// configs
const app = express()
app.use(morgan("dev"))
app.use(express.json())

// cors

app.use((req, res, next) => {
    const allowedOrigin = process.env.CORS_ALLOWED_ORIGINS;
    res.header('Access-Control-Allow-Origin', allowedOrigin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.get('/', (req, res) => {
    res.status(200).send('API is up')
})
// 
const port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})
