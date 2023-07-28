const express = require('express');
const app = express();
let theArray = [{"symbol": "I3NBBUSD"," priceChange" : "3.50011113000","priceChangePercent":"1.164","weightedAvgPrice":"305.49642663","prevClosePrice":"300.70000000", "lastPrice" : "304.20000000" , " lastQty" : " 1.02000000"}];
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/api/v3/ticker/24hrs', (req, res) => {
res.set('Access-Control-Allow-Origin', '*');
res.json(theArray)
})
app.listen(8080, () => {
    console.log('listening on port 8080')
})
